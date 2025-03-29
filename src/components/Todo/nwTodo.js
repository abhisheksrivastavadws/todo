import React, { useState } from "react";
import { Grid, TextField, Button, Paper, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ToDoList = () => {
  const [tasks, setTasks] = useState < string[" "] > [];
  const [input, setInput] = useState("");

  // Add Task
  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  // Remove Task
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      style={{ marginTop: "20px" }}
    >
      {/* Input Section */}
      <Grid item xs={12} sm={8}>
        <TextField
          label="Enter task..."
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={addTask}>
          Add
        </Button>
      </Grid>

      {/* Task List */}
      {tasks.map((task, index) => (
        <Grid item xs={12} sm={8} key={index}>
          <Paper
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <Typography>{task}</Typography>
            <Button color="secondary" onClick={() => removeTask(index)}>
              <DeleteIcon />
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default ToDoList;
