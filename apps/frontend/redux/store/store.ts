import {
    Action,
    ThunkAction,
    combineReducers,
    configureStore,
    Store,
    applyMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createWrapper, Context, HYDRATE, MakeStore } from 'next-redux-wrapper';
import rootSaga from './rootSaga';
import modalReducer from '../ActionsReducer/MenuModal/MenuModalSlice';

const rootReducer = combineReducers({
    modal: modalReducer,
});

const sagaMiddleware = createSagaMiddleware();

// const makeStore: MakeStore<any> = () => {
   export const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
        devTools: process.env.NODE_ENV !== 'production',
    });
    sagaMiddleware.run(rootSaga);
    // return store;
// };
// export an assembled wrapper
// export const reduxWrapper = createWrapper<AppStore>(makeStore, {
//     debug: true,
// });

// export const reduxWrapper = createWrapper(()=>store)

// type AppStore = ReturnType<typeof makeStore>;
// export type RootState = ReturnType<AppStore['getState']>;
// export type AppDispatch = ReturnType<AppStore['dispatch']>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
