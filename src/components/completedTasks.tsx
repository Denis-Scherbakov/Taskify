import { todoItem } from "../typescript/interfaces";
import { RootStateOrAny, useSelector } from "react-redux";
import styles from "./completedTasks.module.css";
import { Task } from "./task";

export function CompletedTasks() {
  const store = useSelector((state: RootStateOrAny) => state);
  return (
    <div className={styles.completedTasksWrapper}>
      <h3 className={styles.completedTasks_h3}>Completed Tasks</h3>
      <ul className={styles.completedTasks_ul}>
        {store.map((item: todoItem) =>
          !item.active ? <Task taskText={item.taskText} key={item.id} /> : null
        )}
      </ul>
    </div>
  );
}
