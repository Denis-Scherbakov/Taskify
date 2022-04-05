import styles from "./activeTasks.module.css";
import { RootStateOrAny, useSelector } from "react-redux";
import { Task } from "./Task";
import { EditItem } from "./EditItem";
import { TodoItemI } from "../types";

export function ActiveTasks() {
  const store = useSelector((state: RootStateOrAny) => state);
  return (
    <div>
      <div className={styles.activeTasksWrapper}>
        <h3 className={styles.activeTasks_h3}>Active Tasks</h3>
        <ul className={styles.activeTasks_ul}>
          {store.map((item: TodoItemI) => {
            if (item.active && !item.isEdit) {
              return (
                <Task taskText={item.taskText} key={item.id} id={item.id} />
              );
            } else if (item.active && item.isEdit) {
              return (
                <EditItem key={item.id} id={item.id} taskText={item.taskText} />
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    </div>
  );
}
