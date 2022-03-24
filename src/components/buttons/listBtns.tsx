import styles from "./listButtons.module.css";
import { AcceptBtn } from "./acceptBtn";
import { EditBtn } from "./editBtn";
import { DeleteBtn } from "./deleteBtn";

export function ListBtns() {
  return (
    <div className={styles.listButtonsWrapper}>
      <AcceptBtn />
      <EditBtn />
      <DeleteBtn />
    </div>
  );
}
