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
  const [handleText, setHandleText] = useState("");
  const HandleTodoInput = () => {
    if (text.length > 0) {
      console.log(text, text.length);
      // addTodoToList();

      setHandleText(text);

      setText("");
    }
  };
  const HandleTodoChangedValue = (e) => {
    setText(e.target.value);
  };
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
            {text.length > 0 ? (
              <Input
                type="text"
                style={{
                  marginTop: "0px",
                  width: "90%",
                  fontSize: "12px",
                  padding: "10px",
                }}
                onChange={HandleTodoChangedValue}
              />
            ) : (
              <Input
                type="text"
                style={{
                  marginTop: "0px",
                  width: "90%",
                  fontSize: "12px",
                  padding: "10px",
                  marginLeft: "1rem",
                }}
                placeholder="What do you want to do?"
                onChange={HandleTodoChangedValue}
                value=""
              />
            )}
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
      {/* {(() => {
        if (handleText.length > 0) {
          return <DisplayTodo newData={handleText} />
        }
      })()} */}
      <DisplayTodo newData={handleText} />
    </div>
  );
}
