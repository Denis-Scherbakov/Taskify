import styles from "./activeTasks.module.css";

import { Task } from "./task";

export function ActiveTasks() {
  return (
    <div className={styles.activeTasksWrapper}>
      <h3 className={styles.activeTasks_h3}>Active Tasks</h3>
      <ul className={styles.activeTasks_ul}>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </ul>
    </div>
  );
}
