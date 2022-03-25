import { todoItem } from "../typescript/interfaces";
import styles from "./activeTasks.module.css";
import { RootStateOrAny, useSelector } from "react-redux";
import { Task } from "./task";

export function ActiveTasks() {
  const store = useSelector((state: RootStateOrAny) => state);
  return (
    <div className={styles.activeTasksWrapper}>
      <h3 className={styles.activeTasks_h3}>Active Tasks</h3>
      <ul className={styles.activeTasks_ul}>
        {store.map((item: todoItem) =>
          item.active ? <Task taskText={item.taskText} key={item.id} /> : null
        )}
      </ul>
    </div>
  );
}
