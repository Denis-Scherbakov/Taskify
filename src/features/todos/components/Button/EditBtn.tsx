import styles from "./listButtons.module.css";
import { useDispatch } from "react-redux";
import { MouseEvent } from "react";
import { TodoItemI } from "../../types";
import { editTask } from "../../store/actions";

export function EditBtn(props: Partial<TodoItemI>) {
  const dispatch = useDispatch();
  function toggleEdit(e: MouseEvent<HTMLButtonElement>) {
    dispatch(editTask(e.currentTarget.id));
  }
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={styles.buttonTask}
        id={props.id}
        onClick={(e) => toggleEdit(e)}
      >
        {" "}
      </button>
    </div>
  );
}
