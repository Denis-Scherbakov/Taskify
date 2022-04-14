import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  ACCEPT_CHANGES,
} from "./constants";

export function createTask(task: string) {
  return {
    type: ADD_TASK,
    payload: task,
  };
}

export function toggleTask(id: string) {
  return {
    type: TOGGLE_TASK,
    payload: id,
  };
}

export function deleteTask(id: string) {
  return {
    type: DELETE_TASK,
    payload: id,
  };
}

export function acceptChanges(id: string, text: string) {
  return {
    type: ACCEPT_CHANGES,
    payload: { id: id, text: text },
  };
}

type CreateTaskAction = ReturnType<typeof createTask>;
type ToggleTask = ReturnType<typeof toggleTask>;
type DeleteTaskAction = ReturnType<typeof deleteTask>;
type CreateAcceptChanges = ReturnType<typeof acceptChanges>;

export type TodosAction =
  | CreateTaskAction
  | ToggleTask
  | DeleteTaskAction
  | CreateAcceptChanges;
