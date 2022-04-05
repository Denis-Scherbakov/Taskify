import styles from "./listButtons.module.css";
import { useDispatch } from "react-redux";
import { MouseEvent } from "react";
import { TodoItemI } from "../../types";
import { deleteTask } from "../../store/actions";

export function DeleteBtn(props: Partial<TodoItemI>) {
  const dispatch = useDispatch();
  function deleteTaskHandler(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    dispatch(deleteTask(e.currentTarget.id));
  }
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={styles.buttonTask}
        onClick={(e) => deleteTaskHandler(e)}
        id={props.id}
      ></button>
    </div>
  );
}
