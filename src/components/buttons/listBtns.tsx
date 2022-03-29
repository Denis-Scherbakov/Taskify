import styles from "./listButtons.module.css";
import { CompleteBtn } from "./completeBtn";
import { EditBtn } from "./editBtn";
import { DeleteBtn } from "./deleteBtn";
import { todoItem } from "../../typescript/interfaces";

export function ListBtns(props: Partial<todoItem>) {
  return (
    <div className={styles.listButtonsWrapper}>
      <CompleteBtn id={props.id} />
      <EditBtn />
      <DeleteBtn />
    </div>
  );
}
