import { Send } from '@mui/icons-material'
import { Avatar, Badge, Box, FilledInput, IconButton, InputAdornment, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { get, post, statics } from '../utils/BackEndRequests'
import { useSelector } from 'react-redux'
import { SocketContext } from '../pages/Home'


function Messenger() {
  const user = useSelector(state=>state.user.user)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState(null)
  const [newmessages, setNewMessages] = useState(false)
  const [conversation, setConversation] = useState(null)
  const [conversations, setConversations] = useState(null)
  const socket = useContext(SocketContext)
  socket.on("newMessage", (c)=>{
    c != conversation ? setNewMessages(!newmessages) : handleLiveChat(c)
  })

  const handleMessageTyping = (e)=>{
    setMessage(e.currentTarget.value)

  }
  const sendMessage = (e)=>{
    const cd = conversations.find(c=>c.id == conversation)
    let destination = ""
    if (cd && message != ""){
      cd.sender.id == user._id ? destination = cd.reciever.id : destination = cd.sender.id
      post("/api/message", {message, reciever: destination}).then((res)=>{
        socket.emit("sentMessage", {reciever: destination, sender: user._id, conversation: conversation})
        setMessage("")
      })
    }
  }

  const handleChangeConversation = (e) =>{
    const id = e.currentTarget.getAttribute("data-con-id")
    setConversation(id)
  }

  const handleLiveChat = (c) =>{
    setNewMessages(!newmessages)
  }

  useEffect(()=>{
   Boolean(conversation) && get(`/api/conversation/${conversation}`).then((res)=>{
      setMessages(res.data.messages)
      get("/api/conversation").then((res)=>{
        setConversations(res.data.conversations)
        document.getElementById("message-bottom").scrollIntoView()
      })
    })
    !Boolean(conversation) &&  get("/api/conversation").then((res)=>{
      setConversations(res.data.conversations)
    })
    
  }, [conversation, newmessages])

  
  return (
    <Box sx={{width: "100%", height: "Calc(100vh - 70px)",}}>
      <Stack direction={"row"} sx={{height: "100%" }} >
          
        <Box sx={{width: "35%", height: "100%", display:{xs: "none", md: "block"}}} >
        <Paper
        elevation={3}
        sx={{
          border: "1px solid primary.main",
          "border-top-right-radius": "20px",
          "border-top-left-radius": "20px",
          margin: "5px 10px",
          "box-shadow": "-3px 5px 10px 1px rgba(0,0,0,0.75)",
          height: "100%",
          overflowX: "hidden",
          "-ms-overflow-style": "none",
          "scrollbar-width": "none"
          
        }}
      >
        <Box
          sx={{
            backgroundColor: "primary.light",
            border: "1px solid primary.main",
            "border-top-right-radius": "20px",
            "border-top-left-radius": "20px",
            width: "100%"

          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "primaryText.main",
              padding: "10px 5px",
              cursor: "default",
              textAlign: "center"
            }}
          >
            Conversations
          </Typography>
        </Box>
        <Box sx={{overflowX: "scroll", height: "100%"}}>
        <List>
      
          { Boolean(conversations)  && conversations.map(c=>(<ListItem id = {"conversation-"+c._id} data-con-id={c._id} onClick={handleChangeConversation}>
            <ListItemAvatar>
              <Badge badgeContent={c.unread.length > 0 ? c.unread.length : null} color="error">
                <Avatar />
              </Badge>
            </ListItemAvatar>

            <ListItemText
              primary={ user._id == c.sender.id ? 
                `${c.reciever.first_name} ${c.reciever.last_name}`:
               `${c.sender.first_name} ${c.sender.last_name}`}
              secondary={c.messages[0] ? c.messages[0].message : null}
              secondaryTypographyProps={{
                padding: "0px 5px",
                fontFamily: "Glass Antiqua",
                fontSize: "1.2rem",
              }}
              primaryTypographyProps={{ fontWeight: 900 }}
              sx={{ cursor: "pointer" }}
            />
          </ListItem>))}
        </List>
        </Box>
        
      </Paper>
        </Box>
        {/* Message section */}
        <Box  sx={{width: {xs: "100%",md: "65%" }}}>
        
        <Paper
        elevation={3}
        sx={{
          border: "1px solid primary.main",
          "border-top-right-radius": "20px",
          "border-top-left-radius": "20px",
          margin: "5px 10px",
          "box-shadow": "-3px 5px 10px 1px rgba(0,0,0,0.75)",
          height: "100%",
          overflowX: "hidden",
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          backgroundColor: 'primary.light'
          
        }}
      > 
      <Box
          sx={{
            backgroundColor: "primary.light",
            border: "1px solid primary.main",
            "border-top-right-radius": "20px",
            "border-top-left-radius": "20px",
            width: "100%",

          }}
        >
          <List sx= {{padding: "0px 15px",margin: "0px"}}>
          <ListItem sx= {{padding: "0px",margin: "0px"}}>
            <ListItemAvatar>
              <Badge badgeContent={3} color="error">
                <Avatar sx={{ cursor: "help" }} />
              </Badge>
            </ListItemAvatar>

            <ListItemText
              primary="Wale"
              secondary="Online"
              secondaryTypographyProps={{
                fontFamily: "Glass Antiqua",
                fontSize: "1.2rem",
              }}
              primaryTypographyProps={{ fontWeight: 900 }}
              sx={{ cursor: "pointer" }}
            />
          </ListItem>
          
        </List>
        </Box>
      
        <Box sx={{overflowX: "scroll", "height": "75%", position: "sticky", marginBottom: "25vh", top: "0px", backgroundColor: "gray "}}>
          
          
          
        { Boolean(messages)  && messages.map((m)=>{
          if (m.sender == user._id)  {return <Box sx={{width: "100%", display: "flex", justifyContent: "end"}}>
          <Stack sx={{width: "80%", padding: "10px",}} direction= "row-reverse" spacing={2}>
            <Avatar
              src = { user._id == m.conversation_id.sender.id ? 
                statics(m.conversation_id.sender.profile_pic) :
                statics(m.conversation_id.reciever.profile_pic) }
            ></Avatar>
            <Typography variant='body1'> {m.message} </Typography>
          </Stack>    
        </Box>}
          else{
            return <Box sx={{width: "100%", display: "flex", justifyContent: "start"}}>
            <Stack sx={{width: "80%", padding: "10px",}} direction= "row" spacing={2}>
              <Avatar
              src = { user._id != m.conversation_id.sender.id ? 
                statics(m.conversation_id.sender.profile_pic) :
                statics(m.conversation_id.reciever.profile_pic) }
              ></Avatar>
              <Typography variant='body1'> {m.message} </Typography>
            </Stack>    
          </Box>
          }
          
        }
          
          )}
    <Box id="message-bottom" sx={{width: "100%", display: "flex", justifyContent: "start", marginBottom: "80px"}}>
             
          </Box>

        </Box>
        <Box sx={{display: "flex", justifyContent: "center", width: "100%",position: "sticky", bottom: "3px"}}>
        <Box sx={ {backgroundColor: "white", width: "80%", padding: "10px", border: "2px solid blue", borderRadius: "5px" }}>
        <FilledInput 
        value={message ? message : ""}
        onChange={handleMessageTyping}
        placeholder="Write a new message"
        multiline
        maxRows={2}
        id = "messageText"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              edge="end"
              onClick={sendMessage}
            >
               <Send /> 
            </IconButton>
          </InputAdornment>
        }
        fullWidth/>
        </Box>
          </Box>
        
        
       
       
        
      </Paper>


        </Box>
      </Stack>

    </Box>
  )
}

export default Messenger