import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "./AddTaskForm.css"

export default function AddTaskForm() {
  const {
    createTask,
    setShowModal,
    title,
    setTitle,
    description,
    setDescription,
  } = useContext(TaskContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (title) {
      createTask(title, description);
      setShowModal(false);
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className="task-form">
      <label htmlFor="title" className="task-form__title-label">title</label>
      <input
        type="text"
        placeholder="Enter task title"
        onChange={(e) => setTitle(e.target.value)}
        defaultValue={title}
        className="task-form__title"
        name="title"
      />
      <label htmlFor="title" className="">description</label>
      <textarea
        placeholder="Enter your description"
        onChange={(e) => setDescription(e.target.value)}
        defaultValue={description}
        className="task-form__desc"
      />
      <button type="submit" className="task-form__submit">confirmar</button>
    </form>
  );
}
