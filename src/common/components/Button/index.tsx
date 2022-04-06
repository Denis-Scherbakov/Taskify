import styles from "./button.module.css";

export const Button: React.FC<{ icon: JSX.Element; onClick: () => void }> = ({
  icon,
  onClick,
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {icon}
    </button>
  );
};
