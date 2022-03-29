import { ADD_TASK } from "./types";
import { TASK_COMPLETED } from "./types";

export function createTask(task: string) {
  return {
    type: ADD_TASK,
    payload: task,
  };
}

export function completeTask(id: string) {
  return {
    type: TASK_COMPLETED,
    payload: id,
  };
}
