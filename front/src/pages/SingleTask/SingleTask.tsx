import './SingleTasks.sass';
import React, { useEffect } from "react";
import {connect, useDispatch} from "react-redux";
import {getSingleTaskRequest, ITask} from "../../store/actions/task";
import Loader from "../../components/ui/loader/Loader";

interface IProps {
  task: ITask,
  location: any,
  isError: boolean,
  isFetching: boolean
}

const SingleTask: React.FC<IProps> = ({location, task, isError, isFetching}) => {
  const dispatch = useDispatch();
  const taskId = location.pathname.slice(6);

  useEffect(() => {
    dispatch(getSingleTaskRequest(taskId))
  }, [])

  if (isFetching)
    return <Loader/>
  else if (isError)
    return <p>ERROR</p>
  else
    return (
      <div className='singleTask'>
        <div className='singleTask__content'>
          <h1 className='singleTask__title'>{ task.title }</h1>

          <p className='singleTask__description'>{ task.description }</p>
        </div>
      </div>
    )
}

const mapStateToProps = (store: any) => {
  return {
    task: store.task.task,
    isError: store.task.isError,
    location: store.router.location,
    isFetching: store.task.isFetching,
  };
};

export default connect(mapStateToProps)(SingleTask);