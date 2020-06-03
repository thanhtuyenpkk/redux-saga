import { call, put, select,takeEvery } from 'redux-saga/effects';
import { ACTION_TYPES } from '../types'
// import request from '../requests/index';
  
function* login(action) {
    try {
        const { data } = action
    //   let response = yield call(request.login, username, password);
      yield put({ type: 'LOGIN_SUCCESS', user: data });
    } catch (err) {
      yield put({ type: 'LOGIN_FAILURE', err });
    }
  }
  
  // speacial
  export function* watchLogin() {
    yield takeEvery(ACTION_TYPES.LOGIN, login);
}