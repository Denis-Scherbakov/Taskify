import "./App.css";
import { AddTask } from "./components/addTask";
import { AllTasks } from "./components/allTasks";

function App() {
  return (
    <div className="App">
      <h1 className="heading">TASKIFY</h1>
      <AddTask />
      <AllTasks />
    </div>
  );
}

export default App;
