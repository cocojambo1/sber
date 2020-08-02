import './Main.sass'
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { Redirect } from 'react-router-dom';
import Task from "../../components/Task/Task";
import { ITask} from "../../store/actions/task";
import { connect, useDispatch } from "react-redux";
import Loader from "../../components/ui/loader/Loader";
import { getAllTaskRequest } from "../../store/actions/task";

interface IProps {
  tasks: ITask[]
  isError: boolean
  isFetching: boolean,
}

const Main = ({ tasks, isError, isFetching }: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (Cookies.get('token'))
      dispatch(getAllTaskRequest())
  }, []);

  if ( !Cookies.get('token') )
    return <Redirect to='/auth/sing-in' />
  else if (isFetching)
    return <Loader/>
  else if (isError)
    return <p>ERROR</p>
  else {
    return (
      <div className='main' >
        <div className='container'>
          {
            tasks.map((task: any) => (
              <Task
                text={task.title}
                id={task.id}
                key={task.id}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store: any) => {
  return {
    tasks: store.task.tasks,
    isError:  store.task.isError,
    isFetching: store.task.isFetching
  }
}

export default connect(mapStateToProps)(Main);