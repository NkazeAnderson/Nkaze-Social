import {
  Delete,
  LoyaltyOutlined,
  PermMediaOutlined,
  SendOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  ImageList,
  ImageListItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useState, useEffect } from "react";

function NewPost() {
  const [images, setImages] = useState([]);
  const ImageUrls = [];
  const handlePostImageAdd = (event) => {
    const imageArray = images;
    for (let i = 0; i < event.target.files.length; i++) {
      imageArray.push(event.target.files[i]);
    }
    // console.log(imageArray);
    setImages([...imageArray]);
  };

  console.log(images);
  images.map((file) => {
    const fileURL = URL.createObjectURL(file);
    const i = { img: fileURL, title: file.name };
    ImageUrls.push(i);
  });
  console.log(ImageUrls);

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
          Nkaze Anderson's Post
        </Typography>
      </Stack>
      <TextField
        fullWidth
        placeholder="Post a new post"
        multiline
        maxRows={3}
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
              >
                <Delete color={"error.light"} />
              </IconButton>

              <img
                srcSet={`${item.img}`}
                src={`${item.img}`}
                alt={"Post Image"}
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
        <Button endIcon={<SendOutlined />}>Post</Button>
      </Stack>
    </Paper>
  );
}

export default NewPost;
