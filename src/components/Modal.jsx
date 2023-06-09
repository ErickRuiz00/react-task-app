import { useState } from "react";
import { useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
import "./Modal.css";
import {AiFillCloseCircle} from 'react-icons/ai';

export default function Modal(props) {
  const {
    showModal,
    setShowModal,
    createTask,
    isEditing,
    setIsEditing,
    title,
    description,
  } = useContext(TaskContext);

  const [previousTitle, setPreviousTitle] = useState(null);
  const [previousDescription, setPreviousDescription] = useState(null);

  useEffect(() => {
    setPreviousTitle(title);
    setPreviousDescription(description);
  }, [showModal]);

  if (!showModal) return;

  const handleClose = () => {
    if (isEditing) {
      createTask(previousTitle, previousDescription);
      setIsEditing(false);
    }
    setShowModal(false);
  };


  return (
    <div className="modal" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h1>{isEditing ? "edit" : "create"} task</h1>
          <button onClick={handleClose} className="modal__close"><AiFillCloseCircle size={25} color={"red"} onClick={handleClose}/></button>
        </div>
        <hr />
        <div className="modal-body">{props.children}</div>
      </div>
    </div>
  );
}
