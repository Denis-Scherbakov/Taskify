import styles from "./listButtons.module.css";
import { CompleteIcon } from "../Icons/Complete";
import { DeleteIcon } from "../Icons/Delete";
import { EditIcon } from "../Icons/Edit";

export const Button: React.FC<{ icon: JSX.Element; onClick: () => void }> = ({
  icon,
  onClick,
}) => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.buttonTask} onClick={onClick}>
        {icon}
      </button>
    </div>
  );
};
