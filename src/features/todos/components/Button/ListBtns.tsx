import { useDispatch } from "react-redux";
import styles from "./listButtons.module.css";
import { Button } from ".";
import { TodoItemI } from "../../types";
import { completeTask, deleteTask, editTask } from "../../store/actions";
import { CompleteIcon } from "../Icons/Complete";
import { DeleteIcon } from "../Icons/Delete";
import { EditIcon } from "../Icons/Edit";

export function ListBtns(props: Pick<TodoItemI, "id">) {
  const dispatch = useDispatch();

  const completeTaskHandler = (id: string) => () => dispatch(completeTask(id));
  const toggleEdit = (id: string) => () => dispatch(editTask(id));
  const deleteTaskHandler = (id: string) => () => dispatch(deleteTask(id));

  return (
    <div className={styles.listButtonsWrapper}>
      <Button icon={<CompleteIcon />} onClick={completeTaskHandler(props.id)} />
      <Button icon={<EditIcon />} onClick={toggleEdit(props.id)} />
      <Button icon={<DeleteIcon />} onClick={deleteTaskHandler(props.id)} />
    </div>
  );
}
