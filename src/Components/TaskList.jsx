import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "./Styles/TaskList.css";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  // if (tasks.length === 0) {
  //   return <div className="task-list"></div>;
  // }

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <h1 className="no-task">No hay tareas aún</h1>
      ) : 
        tasks.map((task) => <TaskCard task={task} key={task.id} />)
      }
    </div>
  );
}

export default TaskList;
