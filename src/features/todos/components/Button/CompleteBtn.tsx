import { TodoItemI } from "../../types";
import styles from "./listButtons.module.css";
import { useDispatch } from "react-redux";
import { completeTask } from "../../store/actions";
import { MouseEvent } from "react";

export function CompleteBtn(props: Partial<TodoItemI>) {
  const dispatch = useDispatch();
  function completeTaskHandler(e: MouseEvent<HTMLButtonElement>) {
    dispatch(completeTask(e.currentTarget.id));
    console.log(e.currentTarget.id);
  }

  return (
    <div className={styles.buttonWrapper}>
      <button
        id={props.id}
        className={styles.buttonTask}
        onClick={(e) => completeTaskHandler(e)}
      ></button>
    </div>
  );
}
