import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';
import {
  ALL_TASK_REQUEST,
  ALL_TASK_FAIL,

  SINGLE_TASK_REQUEST,
  SINGLE_TASK_FAIL,
} from "../constants/task";
import { getAllTaskSuccess, getSingleTaskSuccess } from "../actions/task";

const getTasks = () => axios.get('http://vahella.me:8087/tasks')
const getTask = (id: number) => axios.get(`http://vahella.me:8087/task/${id}`)

function* tasksWorker() {
  try {
    const response = yield call( getTasks );

    if (response.status === 200) {
      yield put( getAllTaskSuccess(response.data) )
    } else {
      yield put({
        type: ALL_TASK_FAIL
      })
    }
  } catch (e) {
    yield put({
      type: ALL_TASK_FAIL
    })
  }
}

export function* watchTasks() {
  yield takeEvery(ALL_TASK_REQUEST, tasksWorker)
}

/*-------------------------------------------------------------------------------*/

interface IAction {
  id: number,
  type: string,
}

function* taskWorker(action: IAction) {
  try {
    const response = yield call( getTask, action.id );

    if (response.status === 200) {
      yield put( getSingleTaskSuccess(response.data) );
    } else {
      yield put({
        type: SINGLE_TASK_FAIL,
      });
    }
  } catch (e) {
    yield put({
      type: SINGLE_TASK_FAIL
    });
  }
}

export function* watchTask() {
  yield takeEvery(SINGLE_TASK_REQUEST, taskWorker);
}