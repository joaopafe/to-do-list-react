import { useState } from "react";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        name: newTask,
        done: false,
      },
    ]);
  };

  console.log(tasks);

  return (
    <>
      <div className="page-title-section">
        <h1 className="page-title">Lista de tarefas</h1>
      </div>

      <TaskInput onAddTask={addTask} />

      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
