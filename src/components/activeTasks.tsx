import styles from "./activeTasks.module.css";
import { AcceptSvg } from "./svg/accept";
import { EditSvg } from "./svg/edit";
import { TrashSvg } from "./svg/trash";

export function ActiveTasks() {
  return (
    <div className={styles.activeTasksWrapper}>
      <h3 className={styles.activeTasks_h3}>Active Tasks</h3>
      <ul className={styles.activeTasks_ul}>
        <li className={styles.activeTasks_li}>
          <p>Task 1 p</p>
          <EditSvg />
          <TrashSvg />
          <AcceptSvg />
        </li>
        <li className={styles.activeTasks_li}>Task 2</li>
        <li className={styles.activeTasks_li}>Task 3</li>
      </ul>
    </div>
  );
}
