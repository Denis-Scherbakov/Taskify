import { todoItem } from "../typescript/interfaces";
import { ListBtns } from "./buttons/listBtns";
import styles from "./task.module.css";

export function Task(props: Partial<todoItem>) {
  return (
    <li className={styles.activeTasks_li}>
      <p className={styles.taskP}>{props.taskText}</p>
      <ListBtns />
    </li>
  );
}
