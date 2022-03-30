import { todoItem } from "../typescript/interfaces";
import { RootStateOrAny, useSelector } from "react-redux";
import { Task } from "./task";
import { EditItem } from "./editItem";
import styles from "./completedTasks.module.css";

export function CompletedTasks() {
  const store = useSelector((state: RootStateOrAny) => state);
  return (
    <div>
      <div className={styles.completedTasksWrapper}>
        <h3 className={styles.completedTasks_h3}>Completed Tasks</h3>
        <ul className={styles.completedTasks_ul}>
          {store.map((item: todoItem) => {
            if (!item.active && !item.isEdit) {
              return (
                <Task taskText={item.taskText} key={item.id} id={item.id} />
              );
            } else if (!item.active && item.isEdit) {
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

// {store.map((item: todoItem) =>
//   item.active === false ? (
//     <Task taskText={item.taskText} key={item.id} id={item.id} />
//   ) : null
// )}
