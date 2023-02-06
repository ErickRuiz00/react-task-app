import { useState, useContext, useRef, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
import "./Styles/TaskForm.css";
import { AiOutlinePlus } from "react-icons/ai";

const TaskForm = () => {
  const { createTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showError, setShowError] = useState(false);
  const refForm = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleCLickOutside, true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length >= 5) {
      createTask(title, description);
      setDescription(""), setTitle("");
      setShowForm(false);
      setShowError(false);
    }
  };

  const handleCLickOutside = (e) => {
    if (refForm.current && refForm.current.contains(e.target))
      setShowForm(true);
    else setShowForm(false);
  };

  if (!showForm)
    return (
      <button className="add-task-button" ref={refForm}>
        <AiOutlinePlus size={24} color={"white"} />
      </button>
    );

  return (
    <form onSubmit={handleSubmit} className="form form-container" ref={refForm}>
      <h1 className="form__task-title">Crea tu tarea</h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        onBlur={() => {
          if (title.length < 5) 
            setShowError(true);
          else
            setShowError(false)
        }}
        value={title}
        className="form__task-input input-title"
        autoFocus
      />
      {(showError)? <p className="task-error">Debes agregar un título (al menos 5 caracteres)</p> : true}
      <textarea
        placeholder="Descripcion"
        onChange={(e) => setDescription(e.target.value)}
        className="form__task-input input-description"
        value={description}
      />
      <button className="save-task">Guardar</button>
    </form>
  );
};

export default TaskForm;
