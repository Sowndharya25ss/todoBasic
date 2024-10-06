import { React, useState } from "react";

function Input(props) {

  const [value, setValue] = useState("");

  const onChangeValue = (i) => {
    setValue(i.target.value);
  };

  const onClickAddTodo = () => {
    props.addTodo(value)
    setValue("")
  }
  

  return (
    <div className="inputBox">
      <input onChange={onChangeValue} type="text" value={value} />
      <button onClick={onClickAddTodo}>Add Todo</button>
    </div>
  );
}

export default Input;
