import styles from "./completedTasks.module.css";

export function CompletedTasks() {
  return (
    <div className={styles.completedTasksWrapper}>
      <h3 className={styles.completedTasks_h3}>Completed Tasks</h3>
      <ul className={styles.completedTasks_ul}>
        <li className={styles.completedTasks_li}>Task 1 done</li>
        <li className={styles.completedTasks_li}>Task 2 done</li>
        <li className={styles.completedTasks_li}>Task 3 done</li>
      </ul>
    </div>
  );
}
