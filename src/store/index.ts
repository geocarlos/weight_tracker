import { createStore, applyMiddleware, Action } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers/PeopleReducer';
import rootSaga from '../sagas';
import IStore from './IStore';

const sagaMiddleware = createSagaMiddleware();
const store = createStore<IStore, Action<any>, any, any>(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;