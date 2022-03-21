import styles from "./allTasks.module.css";
import { ActiveTasks } from "./activeTasks";
import { CompletedTasks } from "./completedTasks";

export function AllTasks() {
  return (
    <div className={styles.taskWrapper}>
      <ActiveTasks />
      <CompletedTasks />
    </div>
  );
}
