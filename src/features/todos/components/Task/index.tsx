import { ChangeEvent, MouseEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../../../common/components/Button";
import {
  acceptChanges,
  completeTask,
  deleteTask,
  editTask,
} from "../../store/actions";

import { TodoItemI } from "../../types";

import Icons from "../Icons";

import styles from "./task.module.css";

export function Task(props: Pick<TodoItemI, "id" | "taskText" | "isEdit">) {
  const dispatch = useDispatch();
  const [text, setText] = useState(props.taskText);
  function editText(e: ChangeEvent<HTMLInputElement>) {
    setText(e.currentTarget.value);
  }
  function acceptChangesHandler(e: MouseEvent<HTMLButtonElement>) {
    dispatch(acceptChanges(e.currentTarget.id, e.currentTarget.value));
  }
  const completeTaskHandler = (id: string) => () => dispatch(completeTask(id));
  const toggleEdit = (id: string) => () => dispatch(editTask(id));
  const deleteTaskHandler = (id: string) => () => dispatch(deleteTask(id));

  return (
    <div>
      {props.isEdit ? (
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
      ) : (
        <li className={styles.activeTasks_li}>
          <p className={styles.taskP}>{props.taskText}</p>
          <div className={styles.buttonsWrapper}>
            <Button
              icon={<Icons.Complete />}
              onClick={completeTaskHandler(props.id)}
            />
            <Button icon={<Icons.Edit />} onClick={toggleEdit(props.id)} />
            <Button
              icon={<Icons.Delete />}
              onClick={deleteTaskHandler(props.id)}
            />
          </div>
        </li>
      )}
    </div>
  );
}
