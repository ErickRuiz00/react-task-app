import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import "./App.css";

function App() {
  return (
    <div className="contenedor">
      <TaskList />
      <TaskForm />
    </div>
  );
}

export default App;
