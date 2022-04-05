import styles from "./allTasks.module.css";
import { ActiveTasks } from "./ActiveTasks";
import { CompletedTasks } from "./CompletedTasks";

export function AllTasks() {
  return (
    <div className={styles.taskWrapper}>
      <ActiveTasks />
      <CompletedTasks />
    </div>
  );
}
