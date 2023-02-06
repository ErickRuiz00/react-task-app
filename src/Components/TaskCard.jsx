import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
import "./Styles/TaskCard.css";
import { BsTrash } from "react-icons/bs";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="flex-container">
      <h1 className="task-title flex-item">{task.title}</h1>
      <p className="task-description flex-item">{task.description}</p>
      <button className="delete-button flex-item" onClick={() => deleteTask(task.id)}>
        <BsTrash color="white" size={23}/>
      </button>
    </div>
  );
}

export default TaskCard;
