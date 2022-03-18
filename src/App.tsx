import "./App.css";
import { ActiveTasks } from "./components/activeTasks";
import { AddTask } from "./components/addTask";
import { CompletedTasks } from "./components/completedTasks";

function App() {
  return (
    <div className="App">
      <h1 className="heading">TASKIFY</h1>
      <AddTask />
      <ActiveTasks />
      <CompletedTasks />
    </div>
  );
}

export default App;
