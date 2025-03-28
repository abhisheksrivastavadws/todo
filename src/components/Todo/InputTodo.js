import React, { useState, useRef } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { Grid, TextField, Button, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
// import React, { useRef } from "react";

export default function InputTodo() {
  const divRef = useRef(null);
  const [text, setText] = useState([]);
  const [handleText, setHandleText] = useState("");
  const HandleTodoInput = () => {
    if (handleText.trim() !== "") {
      setText([...text, handleText]);
      setHandleText("");
    }
  };
  const HandleTodoChangedValue = (e) => {
    setText(e.target.value);
  };
  const removeTask = (index) => {
    setText(text.filter((_, i) => i !== index));
  };
  // const success = () => {
  //   if (divRef.current.classList.contains("success")) {
  //     <Button style={{ textDecoration: "line" }}> success </Button>;
  //   }
  // };
  return (
    <div className="container">
      <Card style={{ width: "98%", border: "1px solid #ddcece" }}>
        <div className="task" style={{ borderBottom: "0.5px solid grey" }}>
          <p
            style={{
              marginTop: "1rem",
              marginBottom: "0px",
              marginLeft: "1rem",
              padding: "5px",
              color: "grey",
            }}
          >
            Add a task
          </p>
        </div>
        <CardMedia sx={{ height: "1vh" }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <p
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                fontSize: "15px",
              }}
            >
              Items to be added
            </p>
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <Input
              type="text"
              style={{
                marginTop: "0px",
                width: "90%",
                fontSize: "12px",
                padding: "10px",
                marginLeft: "1rem",
              }}
              value={handleText}
              onChange={(e) => setHandleText(e.target.value)}
            />

            <span
              style={{ display: "block", marginTop: "5px", fontSize: "10px" }}
            >
              What do you want to procastinate 😊
            </span>
          </Typography>
        </CardContent>
        <CardActions>
          <button
            style={{
              marginTop: "0px",
              backgroundColor: "rgb(136 193 221)",
              cursor: "pointer",
              border: "none",
              borderRadius: "2px",
              padding: "5px",
              fontSize: "15px",
            }}
            onClick={HandleTodoInput}
          >
            Submit
          </button>
        </CardActions>
      </Card>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ marginTop: "20px" }}
      >
        {/* Task List */}
        {text.map((text, index) => (
          <Grid item xs={12} sm={8} key={index}>
            <Paper
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Typography>{text}</Typography>
              <Button
                ref={divRef}
                className="success"
                color="success"
                outline
                style={{
                  marginLeft: "29rem",
                }}
              >
                success
              </Button>
              <Button color="secondary" onClick={() => removeTask(index)}>
                <DeleteIcon />
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
      {/* {(() => {
        if (handleText.length > 0) {
          return <DisplayTodo newData={handleText} />
        }
      })()} */}
      {/* <DisplayTodo newData={handleText} /> */}
    </div>
  );
}
