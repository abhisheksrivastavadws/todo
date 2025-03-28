import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./DisplayTodo.css";
import Card from "@mui/material/Card";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Row } from "reactstrap";

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

export default function DisplayTodo() {
  const [textValue, setTextValue] = React.useState(["Text1", "Text2", "Text3"]);
  return (
    <React.Fragment>
      <div className="displayContainer">
        <Card
          style={{
            width: "85%",
            minHeight: "55px",
            margin: "auto",
            marginTop: "2rem",
          }}
        >
          {textValue.map((data) => (
            <Grid
              container
              spacing={1}
              id="dataToEnter"
              style={{ marginTop: "7px" }}
            >
              <>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Item className="todoDrive">{data}</Item>
                </Grid>
                <Grid className="btnControl">
                  <Button
                    color="success"
                    outline
                    style={{
                      paddingRight: "1rem",
                      width: "50%",
                      marginRight: "1rem",
                    }}
                  >
                    Done
                  </Button>
                  <DeleteIcon />
                </Grid>
              </>
            </Grid>
          ))}
        </Card>
      </div>
    </React.Fragment>
  );
}
