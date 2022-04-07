import { RootStateOrAny, useSelector } from "react-redux";
import { TodoItemI } from "../../types";
import { Task } from "../Task";
import styles from "./tasks.module.css";
export const Tasks = () => {
  const store = useSelector((state: RootStateOrAny) => state);
  return (
    <div className={styles.taskWrapper}>
      <div>
        <div className={styles.activeTasksWrapper}>
          <h3 className={styles.activeTasks_h3}>Active Tasks</h3>
          <ul className={styles.activeTasks_ul}>
            {store.map((item: TodoItemI) => {
              if (item.active) {
                return (
                  <Task
                    taskText={item.taskText}
                    key={item.id}
                    id={item.id}
                    isEdit={item.isEdit}
                  />
                );
              }
            })}
          </ul>
        </div>
      </div>
      <div>
        <div className={styles.completedTasksWrapper}>
          <h3 className={styles.completedTasks_h3}>Completed Tasks</h3>
          <ul className={styles.completedTasks_ul}>
            {store.map((item: TodoItemI) => {
              if (!item.active) {
                return (
                  <Task
                    taskText={item.taskText}
                    key={item.id}
                    id={item.id}
                    isEdit={item.isEdit}
                  />
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
