import { Send } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function AddComment({post, setPost}){
    const [newComment, setNewComment] = useState("");
    const handleCommentSubmit = async (e) =>
  {
    e.preventDefault()
    axios.put(`/api/post/${post.id}/comment`, {text: newComment}).then(res=>{
        if (res.status === 200){
            axios.get(`/api/post/${post.id}`).then(response=>{
                setNewComment("")
                setPost(response.data)
              })
        }
    })
  }
  const handleCommentChange = (e) =>
  {
    const value = e.currentTarget.value
    setNewComment(value)
  }
    return(
<>
        
        <TextField
                placeholder="write a comment"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleCommentSubmit}>
                        <Send color="primary" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                value={newComment}
                onChange={handleCommentChange}
                fullWidth
              />
    </>
    )
    
}
export default AddComment;