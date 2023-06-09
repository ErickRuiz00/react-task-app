import TaskCard from "./TaskCard";
import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import './TaskContainer.css'

export default function TaskContainer() {
  const { taskList, deleteTask } = useContext(TaskContext);

  return (
    <div className="task-container">
      {taskList.map((task, i) => (
      <TaskCard key={i} task={task} deleteTask={deleteTask} />) )}
    </div>
  );
}
