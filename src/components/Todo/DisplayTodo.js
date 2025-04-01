import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./DisplayTodo.css";
import Card from "@mui/material/Card";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "reactstrap";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function DisplayTodo({ todos, onDelete, onDone }) {
  return (
    <React.Fragment>
      <div className="displayContainer">
        <Card style={{ width: "85%", minHeight: "55px", margin: "auto", marginTop: "2rem", padding: "1rem" }}>
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <Grid container spacing={1} key={index} style={{ marginTop: "7px" }}>
                <Grid item xs={12} sm={6}>
                  <Item 
                    className="todoDrive" 
                    style={{ textDecoration: todo.done ? "line-through" : "none" }}
                  >
                    {todo.text}
                  </Item>
                </Grid>
                <Grid item className="btnControl">
                  <Button 
                    color={todo.done ? "secondary" : "success"} 
                    outline 
                    style={{ width: "50%", marginRight: "1rem" }}
                    onClick={() => onDone(index)}
                  >
                    {todo.done ? "Undo" : "Done"}
                  </Button>
                  <DeleteIcon 
                    style={{ cursor: "pointer", color: "red" }} 
                    onClick={() => onDelete(index)}
                  />
                </Grid>
              </Grid>
            ))
          ) : (
            <p style={{ textAlign: "center", color: "gray" }}>No todos added yet.</p>
          )}
        </Card>
      </div>
    </React.Fragment>
  );
}
