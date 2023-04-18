import { all } from 'redux-saga/effects';
import modalSaga from '../components/Common/Modals/MenuModalSaga';

export default function* rootSaga() {
    yield all([modalSaga()]);
}
