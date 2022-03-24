import { ListBtns } from "./buttons/listBtns";
import styles from "./task.module.css";

export function Task() {
  return (
    <li className={styles.activeTasks_li}>
      <p className={styles.taskP}>Task11</p>
      <ListBtns />
    </li>
  );
}
