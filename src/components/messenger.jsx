import { Send } from '@mui/icons-material'
import { Avatar, Badge, Box, FilledInput, IconButton, InputAdornment, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

function Messenger() {
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
          <ListItem>
            <ListItemAvatar>
              <Badge badgeContent={3} color="error">
                <Avatar sx={{ cursor: "help" }} />
              </Badge>
            </ListItemAvatar>

            <ListItemText
              primary="New Message from Wale"
              secondary="Hello, we need to talk....."
              secondaryTypographyProps={{
                padding: "0px 5px",
                fontFamily: "Glass Antiqua",
                fontSize: "1.2rem",
              }}
              primaryTypographyProps={{ fontWeight: 900 }}
              sx={{ cursor: "pointer" }}
            />
          </ListItem>
          
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
        <Box sx={{overflowX: "scroll", height: "75%", position: "relative"}}>
          <Box sx={{width: "100%", position: "relative"}}>
          <Box sx={{width: "80%", padding: "10px"}}>
            <Stack direction= "row" spacing={2}>
              <Avatar></Avatar>
              <Typography variant='body1'> See the documentation below for a complete reference to all of the props and classes available to the components mentioned here. </Typography>

            </Stack>
          </Box>
          </Box>

          <Box sx={{width: "100%", position: "relative"}}>
          <Box sx={{width: "80%", padding: "10px", position: "absolute", right: "0px"}}>
            <Stack direction= "row-reverse" spacing={2}>
              <Avatar></Avatar>
              <Typography variant='body1'> See the documentation below for a complete reference to all of the props and classes available to the components mentioned here. </Typography>

            </Stack>
          </Box>
          </Box>
          
        
        </Box>
        <Box sx={{width: "100%", bottom: "0px"}}>
        <FilledInput  placeholder="Post a new post"
        multiline
        maxRows={3}
        rows={3}
        id = "postText"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              edge="end"
            >
               <Send /> 
            </IconButton>
          </InputAdornment>
        }
        fullWidth/>
        </Box>
          
       
        
      </Paper>


        </Box>
      </Stack>

    </Box>
  )
}

export default Messenger