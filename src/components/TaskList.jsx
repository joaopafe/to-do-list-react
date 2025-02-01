import Task from "./Task";

const TaskList = ({ tasks, onUpdateTask }) => {
  console.log(tasks);

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onUpdate={() => onUpdateTask(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
