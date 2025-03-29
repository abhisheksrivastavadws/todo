import React from "react";
import Header from "../Header/Header";
import InputTodo from "./InputTodo";
import DisplayTodo from "./DisplayTodo";

export default function Todo() {
  return (
    <div>
      <Header />
      <InputTodo />
      {/* <DisplayTodo /> */}
    </div>
  );
}
