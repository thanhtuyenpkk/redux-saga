import { fork, all } from 'redux-saga/effects';
import { watchLogin } from './login.saga';
const rootSaga = function*() {
  yield all([
    watchLogin(),
  ]);
};
export default rootSaga;