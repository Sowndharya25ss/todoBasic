import React from "react";

function List(props) {
  const { arr, deleteTodo } = props;

  return (
    <div className="todos">
      <ul>
        {arr.map((i, id) => {
          return (
            <li
              onClick={() => {
                deleteTodo(id);
              }}
              key={id}
            >
              {i}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
