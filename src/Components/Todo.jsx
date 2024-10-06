import { React, useState } from "react";
import Input from "./Input";
import List from "./List";

function Todo() {
  const [arr, setArr] = useState([]);

  const onClickAddTodo = (value) => {
    const newTodo = value;
    const newArr = [...arr, newTodo];
    setArr(newArr);
  };

  const onClickDeleteTodo = (id) => {
    const newArr = arr.filter((i, idx) => {
      return idx != id;
    });
    setArr(newArr);
  };

  return (
    <>
      <Input addTodo={onClickAddTodo}></Input>
      <List arr={arr} deleteTodo={onClickDeleteTodo}></List>
    </>
  );
}

export default Todo;
