import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import './Header.css'
import {AiOutlinePlusCircle} from 'react-icons/ai';
export default function Header() {
  const { setShowModal, setTitle, setDescription } = useContext(TaskContext);

  const handleOnClick = () => {
    setTitle("");
    setDescription("");
    setShowModal(true);
  };

  return (
    <header className="header">
      <h1 className="header-title">Task App</h1>
      <button onClick={handleOnClick} className="header-btn"><AiOutlinePlusCircle size={35} color={"white"}/></button>
    </header>
  );
}
