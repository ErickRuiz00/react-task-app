import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

const defaultTasks = [
  { title: "Tarea 1", description: "Descripcion tarea 1", id: 0 },
  { title: "Tarea 2", description: "Descripcion tarea 2", id: 1 },
  { title: "Tarea 3", description: "Descripcion tarea 3", id: 2 },
];

// Este contexto debe tener todo lo que vamos a usar en
// diferentes componentes
export function TaskContextProvider(props) {
  var task = JSON.parse(localStorage.getItem("taskList")) || defaultTasks;
  const [taskList, setTaskList] = useState(task);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  const deleteTask = (id) => {
    const newTaskList = taskList.filter((task) => task.id !== id);

    setTaskList(newTaskList);
  };

  const createTask = (title, description) => {
    const newTask = { title, description, id: null };

    setTaskList(
      [newTask, ...taskList].map((task, i) => {
        return { ...task, id: i };
      })
    );
  };

  const editTask = (title, description, id) => {
    setTitle(title);
    setDescription(description);
    deleteTask(id);
    setShowModal(true);
    setIsEditing(true);
  };

  return (
    <TaskContext.Provider
      value={{
        taskList,
        deleteTask,
        createTask,
        showModal,
        setShowModal,
        editTask,
        setTitle,
        setDescription,
        title,
        description,
        isEditing,
        setIsEditing,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
