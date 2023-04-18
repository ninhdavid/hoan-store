import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'apps/frontend/store/store';

export interface ModalState {
    loading: boolean;
    isShow: boolean;
    open: boolean;
    list: [];
}

const initialState: ModalState = {
    loading: false,
    isShow: false,
    open: false,
    list: [],
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModal(state, action) {
            state.isShow = action.payload;
        },
        fetchModalList(state) {
            state.loading = true;
        },
        fetchModalListSuccess(state, action) {
            state.loading = false;
            state.open = action.payload;
        },
        fetchModalListFailed(state) {
            state.loading = false;
        },
    },
});

export const modalActions = modalSlice.actions;

export const selectModalLoading = (state: RootState) => state.modal.loading;
export const fetchModalList = (state: RootState) => state.modal.list;
export const fetchModalListSuccess = (state: RootState) => state.modal.open;
export const selectSetModal = (state: RootState) => state.modal.isShow;
//reducer
const modalReducer = modalSlice.reducer;
export default modalReducer;
