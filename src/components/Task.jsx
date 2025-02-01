const Task = ({ task, onUpdate, onDelete }) => {
  return (
    <li className="task">
      <span
        id={`${task.id}`}
        className="task-name"
        onClick={onUpdate}
        style={{ textDecoration: task.done ? "line-through" : "none" }}
      >
        {task.name}
      </span>

      <button onClick={onDelete} className="remove-task-button">
        Remover
      </button>
    </li>
  );
};

export default Task;
