import styles from "./completedTasks.module.css";
import { Task } from "./task";

export function CompletedTasks() {
  return (
    <div className={styles.completedTasksWrapper}>
      <h3 className={styles.completedTasks_h3}>Completed Tasks</h3>
      <ul className={styles.completedTasks_ul}>
        <Task />
        <Task />
        <Task />
      </ul>
    </div>
  );
}
