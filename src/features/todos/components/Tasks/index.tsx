import { RootStateOrAny, useSelector } from "react-redux";
import { TodoItemI } from "../../types";
import { Task } from "../Task";
import styles from "./tasks.module.css";
import { TaskWrapper } from "./TasksWrapper";

// export const Tasks: React.FC<{ tasks: TodoItemI[] }> = ({ tasks }) => {
//   return tasks.map((item: TodoItemI) => (
//     <Task
//       taskText={item.taskText}
//       key={item.id}
//       id={item.id}
//       isEdit={item.isEdit}
//     />
//   ));
// };
export const Tasks = () => {
  const store = useSelector((state: RootStateOrAny) => state);
  return (
    <div className={styles.taskWrapper}>
      <TaskWrapper active={true}>
        {store.map((item: TodoItemI) => {
          if (item.active) {
            return <Task taskText={item.taskText} key={item.id} id={item.id} />;
          }
          return null;
        })}
      </TaskWrapper>
      <TaskWrapper active={false}>
        {store.map((item: TodoItemI) => {
          if (!item.active) {
            return <Task taskText={item.taskText} key={item.id} id={item.id} />;
          }
          return null;
        })}
      </TaskWrapper>
    </div>
  );
};
