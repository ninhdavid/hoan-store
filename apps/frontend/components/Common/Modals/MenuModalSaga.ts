import { put, takeLatest } from 'redux-saga/effects';
import { modalActions } from './MenuModalSlice';
import { PayloadAction } from '@reduxjs/toolkit';

function* fetchDataModalList(action: PayloadAction) {
    try {
        yield put(modalActions.fetchModalListSuccess(true));
    } catch (err) {
        console.log('Failed to fetch Modal list', err);
    }
}

export default function* modalSaga() {
    yield takeLatest(modalActions.fetchModalList, fetchDataModalList);
}
