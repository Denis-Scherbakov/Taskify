import { MouseEvent, useState } from "react";
import { createTask } from "../redux/actions";
import styles from "./addTask.module.css";
import { useDispatch } from "react-redux";

export function AddTask() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  function taskHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setTask(e.currentTarget.value);
  }

  function addTask(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    dispatch(createTask(task));
    setTask("");
  }

  return (
    <form className={styles.addTaskWrapper}>
      <input
        value={task}
        className={styles.addTaskInput}
        type="text"
        onChange={(e) => taskHandler(e)}
        placeholder="Enter a task"
      />
      <button onClick={(e) => addTask(e)} className={styles.addTaskButton}>
        Go
      </button>
    </form>
  );
}
