import {authReducer} from "../auth/authStore/auth.reducer"
import {Action, ActionReducerMap} from "@ngrx/store";
import {AuthActions} from "../auth/authStore/auth.actions";

interface IReducers{
  auth: typeof authReducer
}



export const combineReducers:ActionReducerMap<any,any>= {auth: authReducer}
