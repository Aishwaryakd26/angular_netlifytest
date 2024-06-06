import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

//whole counter state
export const selectCounterState=(state:AppState ) =>state.counter


//select slice of data from whole selectCounterState i.e for count
export const selectCount =createSelector(
    selectCounterState,
    (state)=>state.count
)