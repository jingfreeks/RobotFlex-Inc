import { all, call } from 'redux-saga/effects';

import {robotSaga} from '../../../redux/robots/saga';
import {userSaga} from '../../../redux/users/saga';

export default function* rootSaga() {
  yield all([call(robotSaga), call(userSaga)]);
}