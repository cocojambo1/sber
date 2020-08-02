import {
  ALL_TASK_REQUEST,
  ALL_TASK_SUCCESS,
  
  SINGLE_TASK_REQUEST,
  SINGLE_TASK_SUCCESS,
} from "../constants/task";

export interface ITask {
  id: number
  records: null | IRecords[]
  title: string
  status: number
  ownerId: number
  created: string
  updated: string
  description: string
}

interface IRecords {
  id: string
  text: string
  fileName: string
}

export const getAllTaskRequest = () => ({
  type: ALL_TASK_REQUEST,
})

export const getAllTaskSuccess = (tasks: ITask[]) => ({
  type: ALL_TASK_SUCCESS,
  tasks,
})

/*--------------------------------------------------------------*/

export const getSingleTaskRequest = (id: number) => ({
  type: SINGLE_TASK_REQUEST,
  id,
});

export const getSingleTaskSuccess = (task: ITask) => ({
  type: SINGLE_TASK_SUCCESS,
  task,
})