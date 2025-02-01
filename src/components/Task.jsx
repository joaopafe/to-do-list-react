const Task = ({ task, onUpdate }) => {
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

      <button className="remove-task-button">Remover</button>
    </li>
  );
};

export default Task;
