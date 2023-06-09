import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import TaskContainer from "./components/TaskContainer";
import Modal from "./components/Modal";
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Header className="header"/>
      <TaskContainer className="task-container"/>
      <Modal>
        <AddTaskForm/>
      </Modal>
      <Footer/>
    </div>
  );
}

export default App;
