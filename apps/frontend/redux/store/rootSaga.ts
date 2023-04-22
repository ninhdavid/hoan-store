import { all } from 'redux-saga/effects';
import modalSaga from '../ActionsReducer/MenuModal/MenuModalSaga';

export default function* rootSaga() {
    yield all([modalSaga()]);
}
