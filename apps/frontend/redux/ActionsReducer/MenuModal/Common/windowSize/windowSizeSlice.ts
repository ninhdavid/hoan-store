import { RootState } from "@/redux/store/store";
import { createSlice } from "@reduxjs/toolkit";

export interface windowSizeState {
    widthSize:number;
    heightSize:number;
}

const initialState:windowSizeState ={
    widthSize:0,
    heightSize:0,
}
const windowSizeSlice = createSlice({
    name:'windowSize', initialState,
    reducers:{
        setWindowSize(state,action){
            state.widthSize = action.payload
            state.heightSize = action.payload
        }
    }
})

export const windowSizeActions= windowSizeSlice.actions

//select 
export const selectSetWindowSize = (state:RootState)=>state.windowSize.widthSize

const windowSizeReducer = windowSizeSlice.reducer;
export default windowSizeReducer
