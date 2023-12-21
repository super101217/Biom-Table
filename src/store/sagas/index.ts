import { all, takeLatest } from 'redux-saga/effects';
import { getDataListSaga } from './home.saga';
import { homeAction } from 'store/slices';

export function* appSaga() {
  yield all([takeLatest(homeAction.getDataList.type, getDataListSaga)]);
}
