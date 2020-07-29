import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './reducers'
import rootSaga from './saga/initialSaga';

export const history = createBrowserHistory()

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
        createRootReducer(history),
        compose(
            applyMiddleware(
                routerMiddleware(history),
                createLogger(),
                sagaMiddleware
            ),
        ),
    )

  sagaMiddleware.run(rootSaga);

  return store
}