import {
  Delete,
  LoyaltyOutlined,
  PermMediaOutlined,
  SendOutlined,
} from "@mui/icons-material";
import {
  Button,
  IconButton,
  ImageList,
  ImageListItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function NewPost() {
  const [images, setImages] = useState([]);
  const ImageUrls = [];
  const user = useSelector(state=>state.user.user)
  var data_pos = 0;
 
  
    images.map((file) => {
      const fileURL = URL.createObjectURL(file);
      const i = { img: fileURL, title: file.name , pos: data_pos };
      ImageUrls.push(i);
      data_pos ++;
      return;
    });
  
  const handlePostImageAdd = (event) => {
    const imageArray = images;
    for (let i = 0; i < event.target.files.length; i++) {
      imageArray.push(event.target.files[i]);
    }
    setImages([...imageArray]);
  };
 
  const handleRemoveImage = (e)=>{
    const el = e.currentTarget
    const pos = parseInt(el.getAttribute("data-pos") ) 
    const newImages = []
    for ( let i = 0; i < images.length; i++){
      i != pos && newImages.push(images[i])
    }
    setImages([...newImages])
  }

  const handlePost= async (e) => {
    const formData = new FormData()
    const  text = document.getElementById("postText").value;
    formData.append("text", text)
    images.forEach(image=>{
      formData.append("files", image)
    })
    try{
      const res = await axios.post("/api/post", formData, {"Content-Type": `multipart/form-data; boundary=${formData._boundary}`})
      if (res.status == 200) { document.getElementById("postText").value = ""; setImages([]);}
    }
    catch(err){

    }
  }
  return (
    <Paper elevation={5} mb={4}>
      <Stack
        direction="row"
        alignItems={"center"}
        sx={{ backgroundColor: "primary.main", p: 1 }}
      >
        <Typography
          variant="body1"
          sx={{ ml: 2, color: "primaryText.main", fontWeight: 600 }}
        >
          {`${user.first_name} ${user.last_name}'s Post`}
        </Typography>
      </Stack>
      <TextField
        fullWidth
        placeholder="Post a new post"
        multiline
        maxRows={3}
        id = "postText"
      ></TextField>
      <input
        id="postImages"
        type="file"
        accept=".png,.jpeg,.jpg"
        multiple
        onChange={handlePostImageAdd}
        hidden
      />
      {Boolean(ImageUrls.length) && (
        <ImageList
          sx={{ width: "100%", height: 250, m: 0 }}
          cols={2}
          rowHeight={200}
        >
          {ImageUrls.map((item) => (
            <ImageListItem key={item.img} sx={{ position: "relative" }}>
              <IconButton
                sx={{ position: "absolute", backgroundColor: "primary.light" }}
                data-pos = {item.pos}
                onClick={handleRemoveImage}
              >
                <Delete color={"error.light"} />
              </IconButton>

              <img
                srcSet={`${item.img}`}
                src={`${item.img}`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
      <Stack direction="row" justifyContent={"space-around"}>
        <Button
          endIcon={<PermMediaOutlined />}
          onClick={(event) => {
            document.getElementById("postImages").click();
          }}
        >
          Add Media
        </Button>
        <Button endIcon={<LoyaltyOutlined />}>Tag Friends</Button>
        <Button onClick={handlePost} endIcon={<SendOutlined />}>Post</Button>
      </Stack>
    </Paper>
  );
}

export default NewPost;
