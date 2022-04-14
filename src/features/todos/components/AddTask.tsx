import { useState } from "react";
import styles from "./addTask.module.css";
import { useDispatch } from "react-redux";
import { createTask } from "../store/actions";

export function AddTask() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  function taskHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setTask(e.currentTarget.value);
  }

  function addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (task) {
      dispatch(createTask(task));
      setTask("");
    }
  }

  return (
    <form className={styles.addTaskWrapper} onSubmit={addTask}>
      <input
        value={task}
        className={styles.addTaskInput}
        type="text"
        onChange={taskHandler}
        placeholder="Enter a task"
      />
      <button className={styles.addTaskButton} type="submit">
        Go
      </button>
    </form>
  );
}
