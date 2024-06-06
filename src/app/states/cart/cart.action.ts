import { createAction, props } from "@ngrx/store";

export const addToCart= createAction('[Cart Component]',props<{product:any}>());

