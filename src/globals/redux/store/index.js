import {
    createStore,
    applyMiddleware,
} from 'redux';

import rootReducer from '../rootReducer';
import rootSaga from '../rootSaga';
import createSagaMiddleware from 'redux-saga';

// const middlewares=[logger];
const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

export const store=createStore(rootReducer,applyMiddleware(...middleWares));
sagaMiddleware.run(rootSaga);
// sagaMiddleware.run(fetchRobotsrStart,fetchCurrentUser);
export default {store}