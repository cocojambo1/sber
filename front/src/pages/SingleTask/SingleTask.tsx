import './SingleTasks.sass';
import parse from 'html-react-parser'
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Loader from "../../components/ui/loader/Loader";
import { getSingleTaskRequest, ITask } from "../../store/actions/task";

interface IProps {
  task: ITask,
  location: any,
  isError: boolean,
  isFetching: boolean
}

const SingleTask: React.FC<IProps> = ({location, task, isError, isFetching}) => {
  const dispatch = useDispatch();
  const taskId = +location.pathname.slice(6);

  useEffect(() => {
    dispatch(getSingleTaskRequest(taskId))
  }, [])

  if (isFetching)
    return <Loader/>
  else if (isError)
    return <p>ERROR</p>
  else {
      return (
            <div className='singleTask'>
              <div className='singleTask__content'>
                <h1 className='singleTask__title'>{ task.title }</h1>

                <div className='singleTask__description'>{ task.description ? parse(task.description) : null }</div>

                <hr/>

                <div className='singleTask__audioDescription'>
                  <h2>Общее описание</h2>

                  <audio
                    src={`http://vahella.me:5000/stt/${task.audioDescription}`}
                    autoPlay={false}
                    controls={true}
                  />
                </div>

                <hr/>

                <div className='records'>
                  <div className='records__container'>
                    <div className='records__text records__table'>
                      {
                        Object.keys(task).length !== 0 ? (
                          // @ts-ignore
                          task.records.map(record => (
                            <p
                              key={record.id + Date.now()}
                            >{ record.text }</p>
                          ))
                        ) : null
                      }
                    </div>

                    <div className='records__audio records__table'>
                      {
                        Object.keys(task).length !== 0 ? (
                          // @ts-ignore
                          task.records.map(record => (
                            <audio
                              src={`http://vahella.me:5000/stt/${record.fileName}`}
                              autoPlay={false}
                              controls={true}
                              key={record.id}
                            />
                          ))
                        ) : null
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
    }
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