import { ADD_TASK } from "./types";
import { TASK_COMPLETED } from "./types";

const initialState = [
  {
    id: "1",
    taskText: "Buy Cakes",
    active: true,
  },
  {
    id: "2",
    taskText: "Buy  54  Cakes",
    active: false,
  },
];

function todos(state = initialState, action: any) {
  if (action.type === ADD_TASK && action.payload !== "") {
    return [
      {
        ...state,
        id: Date.now().toString(),
        taskText: action.payload,
        active: true,
      },
      ...state,
    ];
  } else if (action.type === TASK_COMPLETED) {
    return state.map((item) => {
      if (item.id === action.payload) {
        return { ...item, active: !item.active };
      } else return item;
    });
  } else return state;
}

export default todos;
