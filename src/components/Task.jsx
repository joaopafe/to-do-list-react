const Task = ({ task }) => {
  return (
    <div className="task">
      <div id={`${task.id}`} className="task-name">
        {task.done ? <del>task.name</del> : task.name}
      </div>

      <button className="remove-task-button">Remover</button>
    </div>
  );
};

export default Task;
