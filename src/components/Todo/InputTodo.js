import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import DisplayTodo from "./DisplayTodo";

export default function InputTodo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]); 

  const handleAddTodo = () => {
    if (text.trim()) {
      setTodos(prevTodos => [...prevTodos, { text, done: false }]); 
      setText(""); 
    }
  };

  const handleDelete = (index) => {
    // it will delete the element whose index is matched with i 
    setTodos(prevTodos => prevTodos.filter((_, i) => i !== index));
  };

  const handleDone = (index) => {
    setTodos(prevTodos =>
      // it will keep all the element apart from index element  
      prevTodos.map((todo, i) => i === index ? { ...todo, done: !todo.done } : todo)
    );
  };

  return (
    <div className="container">
      <Card style={{ width: "98%", border: "1px solid #ddcece" }}>
        <div className="task" style={{ borderBottom: "0.5px solid grey" }}>
          <p style={{ marginTop: "1rem", marginLeft: "1rem", padding: "5px", color: "grey" }}>
            Add a task
          </p>
        </div>
        <CardMedia sx={{ height: "1vh" }} />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <Input
              type="text"
              style={{ width: "90%", fontSize: "12px", padding: "10px", marginLeft: "1rem" }}
              value={text}
              onChange={e => setText(e.target.value)}
            />
          </Typography>
        </CardContent>
        <CardActions>
          <button
            style={{
              backgroundColor: "rgb(136 193 221)",
              cursor: "pointer",
              border: "none",
              borderRadius: "2px",
              padding: "5px",
              fontSize: "15px",
            }}
            onClick={handleAddTodo}
          >
            Submit
          </button>
        </CardActions>
      </Card>

      <DisplayTodo todos={todos} onDelete={handleDelete} onDone={handleDone} />
    </div>
  );
}
