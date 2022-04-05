import { TodoItemI } from "../types";
import { ListBtns } from "./Button/ListBtns";

import styles from "./task.module.css";

export function Task(props: Pick<TodoItemI, "id" | "taskText">) {
  return (
    <li className={styles.activeTasks_li}>
      <p className={styles.taskP}>{props.taskText}</p>
      <ListBtns id={props.id} />
    </li>
  );
}
