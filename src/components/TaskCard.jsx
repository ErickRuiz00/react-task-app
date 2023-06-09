import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import "./TaskCard.css";
import { FcList, FcFullTrash, FcEditImage } from "react-icons/fc";

export default function TaskCard({ task }) {
  const { editTask, deleteTask } = useContext(TaskContext);
  const [toggleDescription, setToggleDescription] = useState(false);
  const [toggleOptions, setToggleOptions] = useState(false);

  return (
    <div
      className={`card-container ${toggleOptions && "options-active"} ${
        toggleDescription && "toggleDescription"
      }`}
      onClick={() => {
        setToggleDescription(!toggleDescription);
        setToggleOptions(false);
      }}
    >
      <section className="content">
        <h1 className="title">{task.title}</h1>
        <p className="description">{task.description}</p>
      </section>

      <section className="actions" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setToggleOptions(!toggleOptions)}>
          <FcList size={20} />
        </button>

        {toggleOptions && (
          <>
            <button
              className="delete-btn"
              onClick={() => {
                setToggleOptions(false);
                deleteTask(task.id);
              }}
            >
              <FcFullTrash size={20} />
            </button>
            <button
              className="edit-btn"
              onClick={() => {
                setToggleOptions(false);
                editTask(task.title, task.description, task.id);
              }}
            >
              <FcEditImage size={20} />
            </button>
          </>
        )}
      </section>
    </div>
  );
}
