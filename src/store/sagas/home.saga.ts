import { call, put } from 'redux-saga/effects';
import { AppActions } from 'store';
import { getList } from 'apis';
import { DataType } from 'types';

export function* getDataListSaga() {
  try {
    const response: DataType = yield call(getList);
    yield put(AppActions.home.getDataListSuccess(response));
  } catch (err) {
    yield put(AppActions.home.getDataListError(err));
  }
}
