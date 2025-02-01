import Task from "./Task";

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
  console.log(tasks);

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onUpdate={() => onUpdateTask(task.id)}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
