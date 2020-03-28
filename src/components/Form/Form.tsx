import React, { useState } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

export const Form: React.FC<TodoFormProps> = props => {
  const [title, setTitle] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(title);
      setTitle("");
    }
  };

  return (
    <div className="input-field">
      <input
        placeholder="Сходить в зал..."
        id="title"
        type="text"
        className="validate"
        value={title}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  );
};
