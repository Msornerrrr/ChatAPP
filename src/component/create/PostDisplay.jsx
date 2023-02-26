import { AddAPhotoOutlined, EmojiEmotionsOutlined, PollOutlined } from "@mui/icons-material";
import { Avatar, Button, ButtonGroup, TextField, Typography } from "@mui/material"
import { Stack } from "@mui/system";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useState } from "react";
import { DraggableImageList } from "./DraggableImageList";

export const PostDisplay = ({ /* Avatar, */ username, post, setPostList, currIndexState }) => {
  const [currIndex, setCurrIndex] = currIndexState;

  const [emojiPickerOn, toggleEmojiPickerOn] = useState(false);
  const [text, setText] = useState(post.text);
  const [imgUrlList, setImgUrlList] = useState(post.imgUrlList);

  useEffect(() => {
    setText(post.text);
    setImgUrlList(post.imgUrlList);
  }, [post]);

  const handleEmojiClick = (emojiData, event) => {
    setText(text + emojiData.emoji);
  }

  const handleImageChange = e => {
    const filesObj = e.target.files;
    const filesList = [];

    for (let i = 0; i < filesObj.length; i++) {
      filesList.push(URL.createObjectURL(filesObj[i]));
    }

    setImgUrlList(prevList => filesList.concat(prevList));
  }

  const handleSave = () => {
    if(!text) return;

    const newPost = { text: text, imgUrlList: imgUrlList };

    if(currIndex < 0) {
      setPostList(prevList => [newPost, ...prevList]);
    } else {
      setPostList(prevList => 
        prevList.map(post => prevList.indexOf(post) === currIndex ? newPost : post)
      );
    }
    setCurrIndex(-1);
  }

  const handlePost = () => {

  }

  return (
    <Stack direction='column' spacing={2} justifyContent='center' sx={{ width: '800px' }}>
      <Stack direction='row' spacing={2} alignItems='center'>
        <Avatar src='image.jpg' sx={{ width: 50, height: 50 }} />
        <Typography variant="h6"> {username} </Typography>
      </Stack>
      <TextField id="outlined-multiline-flexible" label="Post Anything Here" variant="outlined" fullWidth
        multiline rows={10} value={text} onChange={e => setText(e.target.value)} />

      <DraggableImageList droppableId="droppable1" isRow={false} imgUrlList={imgUrlList} setImgUrlList={setImgUrlList} />

      <Stack direction='row' justifyContent='space-between'>
        <Stack direction='row' spacing={1}>
          <Button size="small" color="primary" aria-label="add-photo" variant="outlined" component="label">
            <AddAPhotoOutlined sx={{ mr: 1 }} />
            Photo
            <input hidden accept="image/*" multiple type="file" onChange={handleImageChange} />
          </Button>
          <Button size="small" color="primary" aria-label="add-emoji" variant="outlined"
            onClick={() => toggleEmojiPickerOn(!emojiPickerOn)}>
            <EmojiEmotionsOutlined sx={{ mr: 1 }} />
            Emoji
          </Button>
          <Button size="small" color="primary" aria-label="add-poll" variant="outlined">
            <PollOutlined sx={{ mr: 1 }} />
            Poll
          </Button>
        </Stack>
        <ButtonGroup variant="outlined">
          <Button size="large" color="secondary" aria-label="save-post" onClick={handleSave}>
            Save
          </Button>
          <Button size="large" color="primary" aria-label="submit-post" onClick={handlePost}>
            Post
          </Button>
        </ButtonGroup>
      </Stack>
      {emojiPickerOn && <EmojiPicker emojiStyle="native" onEmojiClick={handleEmojiClick} height='400px' />}
    </Stack>

  );
}