import { todoItem } from "../../typescript/interfaces";
import styles from "./listButtons.module.css";
import { useDispatch } from "react-redux";
import { completeTask } from "../../redux/actions";
import { MouseEvent } from "react";

export function CompleteBtn(props: Partial<todoItem>) {
  const dispatch = useDispatch();
  function completeTaskHandler(e: MouseEvent<HTMLButtonElement>) {
    dispatch(completeTask(e.currentTarget.id));
    console.log(e.currentTarget.id);
  }

  return (
    <div className={styles.buttonWrapper}>
      <button
        id={props.id}
        className={styles.buttonTask}
        onClick={(e) => completeTaskHandler(e)}
      >
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="25px"
          height="25px"
          viewBox="0 0 1280.000000 1048.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <metadata>
            Created by potrace 1.15, written by Peter Selinger 2001-2017
          </metadata>
          <g
            transform="translate(0.000000,1048.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M7561 7525 c-1625 -1625 -2957 -2953 -2960 -2950 -3 3 -526 525
   -1161 1160 l-1155 1155 -1142 -1142 -1143 -1143 2303 -2303 2302 -2302 4098
   4098 4097 4097 -1143 1143 -1143 1143 -2953 -2956z"
            />
          </g>
        </svg>
      </button>
    </div>
  );
}
