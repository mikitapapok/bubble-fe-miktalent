import { Component, OnInit } from '@angular/core';
import {ActionReducer, Store} from "@ngrx/store";
import {combineReducers} from "../store/combineReducers";
import {authReducer} from "../auth/authStore/auth.reducer";

interface IAuth{
  email: string
  password: string
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  email?: string;

  constructor(private store: Store<typeof combineReducers>) {
   const a= this.store.select('auth').subscribe({
      next: (value)=>{

        console.log('header value', value.auth.email)
      }
    })
  }

  ngOnInit(): void {
  }

}
