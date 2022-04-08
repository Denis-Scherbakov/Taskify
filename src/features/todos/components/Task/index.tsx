import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../../../common/components/Button";
import { acceptChanges, deleteTask, toggleTask } from "../../store/actions";
import { TodoItemI } from "../../types";
import Icons from "../Icons";
import styles from "./task.module.css";

export function Task({ id, taskText }: Pick<TodoItemI, "id" | "taskText">) {
  const dispatch = useDispatch();
  const [text, setText] = useState(taskText);
  const [isEdit, setIsEdit] = useState(false);

  const toggleTaskHandler = () => dispatch(toggleTask(id));
  const toggleEdit = () => setIsEdit((isEdit) => !isEdit);
  const deleteTaskHandler = () => dispatch(deleteTask(id));
  const editText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.currentTarget.value);
  const acceptChangesHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(acceptChanges(id, text));
    setIsEdit(false);
  };

  return (
    <div className={styles.tasksWrapper}>
      {isEdit ? (
        <form className={styles.edit_form} onSubmit={acceptChangesHandler}>
          <input
            type="text"
            autoFocus
            className={styles.editInput}
            value={text}
            onChange={editText}
          />
          <button type="submit" className={styles.acceptChanges_button}>
            Accept Changes
          </button>
        </form>
      ) : (
        <>
          <p className={styles.taskP}>{taskText}</p>
          <div className={styles.buttonsWrapper}>
            <Button icon={<Icons.Complete />} onClick={toggleTaskHandler} />
            <Button icon={<Icons.Edit />} onClick={toggleEdit} />
            <Button icon={<Icons.Delete />} onClick={deleteTaskHandler} />
          </div>
        </>
      )}
    </div>
  );
}
