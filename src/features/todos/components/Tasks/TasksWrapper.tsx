import { ReactChild } from "react";

import styles from "./tasksWrapper.module.css";

export const TaskWrapper = (props: {
  active: boolean;
  children: ReactChild;
}) => {
  return (
    <div>
      <div
        className={
          props.active
            ? styles.activeTasksWrapper
            : styles.completedTasksWrapper
        }
      >
        <h3
          className={
            props.active ? styles.activeTasks_h3 : styles.completedTasks_h3
          }
        >
          {props.active ? "Active Tasks" : "Completed Tasks"}
        </h3>
        <ul
          className={
            props.active ? styles.activeTasks_ul : styles.completedTasks_ul
          }
        >
          {props.children}
        </ul>
      </div>
    </div>
  );
};
