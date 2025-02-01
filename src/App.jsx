import { useState, useEffect } from "react";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    const newTaskObj = {
      id: Date.now(),
      name: newTask,
      done: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTaskObj]);
  };

  const updateTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id != taskId));
  };

  return (
    <>
      <div className="page-title-section">
        <h1 className="page-title">Lista de tarefas</h1>
      </div>

      <TaskInput onAddTask={addTask} />

      <TaskList
        tasks={tasks}
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
      />
    </>
  );
}

export default App;
