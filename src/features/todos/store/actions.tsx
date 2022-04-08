import {
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  ACCEPT_CHANGES,
} from "./constants";

export function createTask(task: string) {
  return {
    type: ADD_TASK,
    payload: task,
  };
}

export function completeTask(id: string) {
  return {
    type: COMPLETE_TASK,
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
