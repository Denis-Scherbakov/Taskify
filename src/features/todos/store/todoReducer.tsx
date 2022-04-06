import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  ACCEPT_CHANGES,
} from "./constants";

const initialState = [
  {
    id: "1",
    taskText: "Buy Cakes",
    active: true,
    isEdit: false,
  },
  {
    id: "2",
    taskText: "Buy 54 Cakes",
    active: false,
    isEdit: false,
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
        isEdit: false,
      },
      ...state,
    ];
  } else if (action.type === COMPLETE_TASK) {
    return state.map((item) => {
      if (item.id === action.payload) {
        return { ...item, active: !item.active };
      } else return item;
    });
  } else if (action.type === EDIT_TASK) {
    return state.map((item) => {
      if (item.id === action.payload) {
        return { ...item, isEdit: !item.isEdit };
      } else return item;
    });
  } else if (action.type === DELETE_TASK) {
    return state.filter((item) => {
      return item.id !== action.payload;
    });
  } else if (action.type === ACCEPT_CHANGES) {
    return state.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, isEdit: !item.isEdit, taskText: action.payload.text };
      } else return item;
    });
  } else return state;
}

export default todos;