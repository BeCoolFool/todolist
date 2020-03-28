import React from "react";
import { ITodo } from "./../../../interfaces";

type TodoElement = {
  todo: ITodo;
  onToogle(id: number): void;
  onRemove(id: number): void;
};

export const ListElement: React.FC<TodoElement> = ({
  todo,
  onToogle,
  onRemove
}) => {
  const style = todo.completed ? "todo completed" : "todo";
  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  };
  return (
    <li className={style}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToogle(todo.id)}
        />
        <span>{todo.title}</span>
        <i
          className="material-icons red-text"
          onClick={event => removeHandler(event, todo.id)}
        >
          delete
        </i>
      </label>
    </li>
  );
};
