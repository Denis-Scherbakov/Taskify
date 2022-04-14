import { TodosAction } from "./actions";
import {
  ADD_TASK,
  TOGGLE_TASK,
  DELETE_TASK,
  ACCEPT_CHANGES,
} from "./constants";

const initialState = [
  {
    id: "1",
    taskText: "Buy Cakes",
    active: true,
  },
  {
    id: "2",
    taskText: "Buy 54 Cakes",
    active: false,
  },
];

function todos(state = initialState, action: TodosAction) {
  switch (action.type) {
    case ADD_TASK:
      return [
        {
          ...state,
          id: Date.now().toString(),
          taskText: action.payload,
          active: true,
        },
        ...state,
      ];
    case TOGGLE_TASK:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, active: !item.active };
        } else return item;
      });
    case DELETE_TASK:
      return state.filter((item) => {
        return item.id !== action.payload;
      });
    case ACCEPT_CHANGES:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, taskText: action.payload.text };
        } else return item;
      });
    default:
      return initialState;
  }
}

export default todos;
