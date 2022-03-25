import todos from "./todoReducer";
import { createStore } from "redux";

export const store = createStore(todos);
