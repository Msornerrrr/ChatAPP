import { Box, Stack, Typography, Avatar, IconButton } from "@mui/material"
import { MoreHoriz, FavoriteBorder, FavoriteOutlined, CommentOutlined } from '@mui/icons-material';
import { useState } from "react";

export const Post = ({ /* Avatar, */ username, date, text, isLiked }) => {
  const [liked, toggleLiked] = useState(isLiked);

  return (
    <Stack direction='column' spacing={1}>
      <Stack direction='row' spacing={2} alignItems='center'>
        <Avatar src='image.jpg' sx={{ width: 50, height: 50 }} />
        <Stack direction='column' spacing={0}>
          <Typography variant="h6"> {username} </Typography>
          <Typography variant="subtitle1"> {date} </Typography>
        </Stack>
        <Box display='flex' justifySelf='end'> <MoreHoriz /> </Box>
      </Stack>
      <Typography variant="body1"> {text} </Typography>
      <Stack direction='row' spacing={2} alignItems='center'>
        <IconButton aria-label='like' onClick={() => toggleLiked(!liked)}>
          {liked ? <FavoriteOutlined sx={{ color: 'red' }} /> : <FavoriteBorder />}
        </IconButton>
        <IconButton aria-label='comment'> <CommentOutlined /> </IconButton>
      </Stack>
    </Stack>
  );
}