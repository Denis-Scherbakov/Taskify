import styles from "./listButtons.module.css";

export function EditBtn() {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.buttonTask}>
        {" "}
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="25px"
          height="25px"
          viewBox="0 0 330 330"
        >
          <g id="XMLID_23_">
            <path
              id="XMLID_24_"
              d="M75,180v60c0,8.284,6.716,15,15,15h60c3.978,0,7.793-1.581,10.606-4.394l164.999-165
		c5.858-5.858,5.858-15.355,0-21.213l-60-60C262.794,1.581,258.978,0,255,0s-7.794,1.581-10.606,4.394l-165,165
		C76.58,172.206,75,176.022,75,180z M105,186.213L255,36.213L293.787,75l-150,150H105V186.213z"
            />
            <path
              id="XMLID_27_"
              d="M315,150.001c-8.284,0-15,6.716-15,15V300H30V30H165c8.284,0,15-6.716,15-15s-6.716-15-15-15H15
		C6.716,0,0,6.716,0,15v300c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V165.001C330,156.716,323.284,150.001,315,150.001z"
            />
          </g>
        </svg>
      </button>
    </div>
  );
}