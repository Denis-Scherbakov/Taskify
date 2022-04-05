import { createStore } from "redux";
import todos from "../features/todos/store/todoReducer";

export const store = createStore(todos);
