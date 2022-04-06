import { useDispatch } from "react-redux";
import { Button } from "../../../../common/components/Button";
import { completeTask, editTask, deleteTask } from "../../store/actions";
import { TodoItemI } from "../../types";
import Icons from "../Icons";

import styles from "./task.module.css";

export function Task(props: Pick<TodoItemI, "id" | "taskText">) {
  const dispatch = useDispatch();
  const completeTaskHandler = (id: string) => () => dispatch(completeTask(id));
  const toggleEdit = (id: string) => () => dispatch(editTask(id));
  const deleteTaskHandler = (id: string) => () => dispatch(deleteTask(id));

  return (
    <li className={styles.activeTasks_li}>
      <p className={styles.taskP}>{props.taskText}</p>
      <div className={styles.buttonsWrapper}>
        <Button
          icon={<Icons.Complete />}
          onClick={completeTaskHandler(props.id)}
        />
        <Button icon={<Icons.Edit />} onClick={toggleEdit(props.id)} />
        <Button icon={<Icons.Delete />} onClick={deleteTaskHandler(props.id)} />
      </div>
    </li>
  );
}
