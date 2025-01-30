import { useState } from "react";

const TaskInput = ({ onAddTask }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input.trim()) {
      onAddTask(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        className="task-input-text"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Adicione aqui uma nova tarefa..."
      />

      <button className="add-task-button">Adicionar</button>
    </form>
  );
};

export default TaskInput;
