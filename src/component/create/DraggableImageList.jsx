import { ImageList, ImageListItem } from "@mui/material";
import { Container } from "@mui/system";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export const DraggableImageList = ({ droppableId, isRow, imgUrlList, setImgUrlList }) => {

  const rowStyle = {
    margin: 0, width: '150px', height: '500px'
  };

  const columnStyle = {
    margin: 0, display: 'flex',
    gridAutoFlow: 'column',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr)) !important',
    gridAutoColumns: 'minmax(160px, 1fr)'
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const handleDragEnd = result => {
    const { destination, source /*draggableId*/ } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId &&
      destination.index === source.index) return;

    setImgUrlList(reorder(imgUrlList, source.index, destination.index));
  }

  return (
    <Container>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={droppableId} direction={isRow ? 'vertical' : 'horizontal'}>
          {(provided, snapshot) => (
            <ImageList cols={1} rowHeight={100} spacing={1}
              ref={provided.innerRef} {...provided.droppableProps}
              sx={isRow ? rowStyle : columnStyle}>
              {imgUrlList.map((url, index) => (
                <Draggable key={url} draggableId={url} index={index}>
                  {(provided, snapshot) => (
                    <ImageListItem ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <img
                        src={url} srcSet={url} alt="User Uploads" loading="lazy"
                        style={{ width: '150px', height: '100px' }} />
                    </ImageListItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ImageList>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
}