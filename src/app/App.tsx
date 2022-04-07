import { AddTask } from "../features/todos/components/AddTask";
import { Tasks } from "../features/todos/components/Tasks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="heading">TASKIFY</h1>
      <AddTask />
      <Tasks />
    </div>
  );
}

export default App;
