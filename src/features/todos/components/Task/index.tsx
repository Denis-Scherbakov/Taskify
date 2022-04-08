import { ChangeEvent, MouseEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../../../common/components/Button";
import { acceptChanges, completeTask, deleteTask } from "../../store/actions";
import { TodoItemI } from "../../types";
import Icons from "../Icons";
import styles from "./task.module.css";

export function Task({ id, taskText }: Pick<TodoItemI, "id" | "taskText">) {
  const dispatch = useDispatch();
  const [text, setText] = useState(taskText);
  const [isEdit, setIsEdit] = useState(false);

  function editText(e: ChangeEvent<HTMLInputElement>) {
    setText(e.currentTarget.value);
  }
  function acceptChangesHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(acceptChanges(id, text));
    toggleEdit();
  }
  const completeTaskHandler = (id: string) => () => dispatch(completeTask(id));
  const toggleEdit = () => setIsEdit((isEdit) => !isEdit);
  const deleteTaskHandler = (id: string) => () => dispatch(deleteTask(id));

  return (
    <div>
      {isEdit ? (
        <li className={styles.tasks_li}>
          <form className={styles.edit_form} onSubmit={acceptChangesHandler}>
            <input
              type="text"
              autoFocus
              className={styles.editInput}
              value={text}
              onChange={(e) => editText(e)}
            ></input>
            <button
              type="submit"
              className={styles.acceptChanges_button}
              value={text}
            >
              Accept Changes
            </button>
          </form>
        </li>
      ) : (
        <li className={styles.tasks_li}>
          <p className={styles.taskP}>{taskText}</p>
          <div className={styles.buttonsWrapper}>
            <Button
              icon={<Icons.Complete />}
              onClick={completeTaskHandler(id)}
            />
            <Button icon={<Icons.Edit />} onClick={toggleEdit} />
            <Button icon={<Icons.Delete />} onClick={deleteTaskHandler(id)} />
          </div>
        </li>
      )}
    </div>
  );
}
