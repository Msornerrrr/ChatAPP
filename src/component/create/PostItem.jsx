import { DeleteOutline, PagesOutlined } from "@mui/icons-material";
import { IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export const PostItem = ({ data, index, style }) => {
  const { postList, setPostList, setCurrIndex } = data;
  const text = postList[index].text;
  const textDisplayed = text.length > 18 ? text.slice(0, 15) + '...' : text;

  const handleDelete = () => {
    setCurrIndex(-1);
    setPostList(prevList => prevList.filter(item => prevList.indexOf(item) !== index));
  }

  const handleClick = () => {
    setCurrIndex(index);
  }

  return (
    <ListItem style={style} key={index} component="div" disablePadding
      secondaryAction={
        <IconButton edge='end' aria-label="delete-post" onClick={handleDelete}>
          <DeleteOutline />
        </IconButton>
      }
      sx={{ borderBottom: '1px solid #E0E0E0' }}>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon> <PagesOutlined /> </ListItemIcon>
        <ListItemText primary={textDisplayed} />
      </ListItemButton>
    </ListItem>
  );
}