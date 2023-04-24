import { PayloadAction } from "@reduxjs/toolkit";
import { windowSizeActions } from "./windowSizeSlice";
import { put, takeLatest } from "redux-saga/effects";



function* setDataWindowSize(action:PayloadAction) {
    try{
        yield put(windowSizeActions.setWindowSize(action.payload))

    }catch(err){
        console.log('failed to set window size',err);
    }

}

export default function* windowSizeSaga(){
    yield takeLatest(windowSizeActions.setWindowSize, setDataWindowSize)
}