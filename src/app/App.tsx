import { AddTask } from "../features/todos/components/AddTask";
import { AllTasks } from "../features/todos/components/AllTasks";
import "./App.css";

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
