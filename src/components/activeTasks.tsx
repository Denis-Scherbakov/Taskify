import styles from "./activeTasks.module.css";

export function ActiveTasks() {
  return (
    <div className={styles.activeTasksWrapper}>
      <h3 className={styles.activeTasks_h3}>Active Tasks</h3>
      <ul className={styles.activeTasks_ul}>
        <li className={styles.activeTasks_li}>Task 1</li>
        <li className={styles.activeTasks_li}>Task 2</li>
        <li className={styles.activeTasks_li}>Task 3</li>
      </ul>
    </div>
  );
}
