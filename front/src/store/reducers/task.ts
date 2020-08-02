import {
  ALL_TASK_REQUEST,
  ALL_TASK_SUCCESS,
  ALL_TASK_FAIL,

  SINGLE_TASK_REQUEST,
  SINGLE_TASK_SUCCESS,
  SINGLE_TASK_FAIL,
} from "../constants/task";
import { ITask } from "../actions/task";

interface IState {
  tasks: ITask[]
  isError: boolean
  isFetching: boolean
}

interface IAction {
  task: any
  type: string,
  tasks: ITask[]
  isError: boolean
  isFetching: boolean
}

const initialState = {
  task: {},
  tasks: [],
  isError: false,
  isFetching: true,
}

export function task(state: IState = initialState, action: IAction): object {
  switch (action.type) {
    case ALL_TASK_REQUEST:
    case SINGLE_TASK_REQUEST:
      return { isFetching: true, isError: false, tasks: [], task: {} }

    case ALL_TASK_SUCCESS:
      return { isFetching: false, isError: false, tasks: action.tasks, task: {} }

    case SINGLE_TASK_SUCCESS:
      return { isFetching: false, isError: false, tasks: [], task: action.task }

    case ALL_TASK_FAIL:
    case SINGLE_TASK_FAIL:
      return { isFetching: false, isError: true, tasks: [], task: {} }

    default:
      return state
  }
}