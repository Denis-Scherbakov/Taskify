import styles from "./addTask.module.css";

export function AddTask() {
  return (
    <form className={styles.addTaskWrapper}>
      <input className={styles.addTaskInput} type="text" name="" id="" />
      <button className={styles.addTaskButton}>Go</button>
    </form>
  );
}
