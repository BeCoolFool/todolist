import React, { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";
import { ITodo } from "./interfaces";

const App: React.FC = () => {
  const [list, setList] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setList(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);

  const handleAdd = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    };
    setList(prev => [newTodo, ...prev]);
  };

  const handleToogle = (id: number) => {
    setList(prev =>
      prev.map(elem => {
        if (elem.id === id) {
          elem.completed = !elem.completed;
        }
        return elem;
      })
    );
  };

  const handleDelete = (id: number) => {
    const shouldDelete = window.confirm("Вы точно хотите удалить элемент?");
    if (shouldDelete) {
      setList(prev => prev.filter(todo => todo.id !== id));
    }
  };
  return (
    <div className="container">
      <Header />
      <Form onAdd={handleAdd} />
      <List todos={list} onToogle={handleToogle} onRemove={handleDelete} />
    </div>
  );
};

export default App;
