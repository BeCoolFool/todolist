import React from "react";
import { ListElement } from "./ListElement/ListElement";
import { ITodo } from "../../interfaces";

type TodoListProps = {
  todos: ITodo[];
  onToogle(id: number): void;
  onRemove(id: number): void;
};

export const List: React.FC<TodoListProps> = ({
  todos,
  onToogle,
  onRemove
}) => {
  if (todos.length === 0) {
    return <p className="center">Заданий пока нет!</p>;
  }

  return (
    <ul className="todo">
      {todos.map(todo => (
        <ListElement
          todo={todo}
          onToogle={onToogle}
          onRemove={onRemove}
          key={todo.id}
        />
      ))}
    </ul>
  );
};
