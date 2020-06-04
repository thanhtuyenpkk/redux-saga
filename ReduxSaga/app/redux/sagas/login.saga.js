import { call, put, select,takeEvery } from 'redux-saga/effects';
import { ACTION_TYPES } from '../types'
// import request from '../requests/index';
import navigatorService from '../navigator.service';
  
function* login(action) {
    try {
        const { data } = action
        console.log('123', data)
    //   let response = yield call(request.login, username, password);
      yield put({ type: 'LOGIN_SUCCESS', user: data });
      yield put(navigatorService.navigate('Home'));
    } catch (err) {
      yield put({ type: 'LOGIN_FAILURE', err });
    }
  }
  
  // speacial
  export function* watchLogin() {
    yield takeEvery(ACTION_TYPES.LOGIN, login);
}