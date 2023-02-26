import { Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { FixedSizeList } from "react-window";
import { PostDisplay } from "./PostDisplay";
import { PostItem } from "./PostItem";

/*
  Post: {
    text: String,
    imgUrlList: [String]
  }
*/
const tempPostList = [
  { text: 'some initial text', imgUrlList: [] }
];

export const Create = ({ /* Avatar, */ username }) => {
  const [postList, setPostList] = useState(tempPostList);
  const [currIndex, setCurrIndex] = useState(-1);   // -1 indicates create new post

  const post = currIndex < 0 ? { text: '', imgUrlList: [] } : postList[currIndex];

  return (
    <Stack direction='row' justifyContent='space-around' alignItems='flex-start'>
      <PostDisplay username="Msornerrrr" post={post} setPostList={setPostList} currIndexState={[currIndex, setCurrIndex]} />

      <Stack direction='column' alignItems='center' spacing={1} sx={{ marginTop: '20px' }}>
        <Typography variant="h6" > Your Saved Posts </Typography>
        <Divider style={{width:'100%'}} />
        <FixedSizeList itemData={{ postList, setPostList, setCurrIndex }} itemCount={postList.length}
          width={250} height={500} itemSize={46} >
          {PostItem}
        </FixedSizeList>
      </Stack>
    </Stack>
  );
}