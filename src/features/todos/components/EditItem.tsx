import { ChangeEvent, MouseEvent, useState } from "react";
import styles from "./editItem.module.css";
import { useDispatch } from "react-redux";
import { TodoItemI } from "../types";
import { acceptChanges } from "../store/actions";

export function EditItem(props: Partial<TodoItemI>) {
  const [text, setText] = useState(props.taskText);
  const dispatch = useDispatch();
  function editText(e: ChangeEvent<HTMLInputElement>) {
    setText(e.currentTarget.value);
  }

  function acceptChangesHandler(e: MouseEvent<HTMLButtonElement>) {
    dispatch(acceptChanges(e.currentTarget.id, e.currentTarget.value));
  }
  return (
    <li className={styles.editTasks_li}>
      <input
        type="text"
        autoFocus
        className={styles.editInput}
        value={text}
        onChange={(e) => editText(e)}
      ></input>
      <button
        className={styles.acceptChanges_button}
        id={props.id}
        value={text}
        onClick={(e) => acceptChangesHandler(e)}
      >
        Accept Changes
      </button>
    </li>
  );
}