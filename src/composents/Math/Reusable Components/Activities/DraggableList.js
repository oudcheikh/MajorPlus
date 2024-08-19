import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Paper, List, ListItem, ListItemText, Typography } from "@mui/material";

const DraggableList = ({ question, items, onItemsChange }) => {
    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const reorderedItems = Array.from(items);
        const [movedItem] = reorderedItems.splice(result.source.index, 1);
        reorderedItems.splice(result.destination.index, 0, movedItem);

        onItemsChange(reorderedItems);
    };

    return (
        <div style={{ marginBottom: "16px" }}>
            <Typography variant="h6" gutterBottom>
                {question}
            </Typography>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="droppable-list">
                    {(provided) => (
                        <List {...provided.droppableProps} ref={provided.innerRef} component={Paper}>
                            {items.map((item, index) => (
                                <Draggable key={item} draggableId={item} index={index}>
                                    {(provided) => (
                                        <ListItem ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} divider>
                                            <ListItemText primary={item} />
                                        </ListItem>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </List>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default DraggableList;
