import {Injectable} from "@angular/core";
import {ActionReducer, ActionReducerMap, Store} from "@ngrx/store";
import {combineReducers} from "../../store/combineReducers";
import {Observable} from "rxjs";

@Injectable({providedIn:'root'})
export class AuthService{
  userInfo: Observable<any>= new Observable<typeof combineReducers>()
   constructor(private store: Store<typeof combineReducers>) {
          this.userInfo=this.store.select('auth')

   }

   isActivate(){
    return this.userInfo
   }
}
