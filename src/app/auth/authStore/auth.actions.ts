import {Action} from "@ngrx/store";

export const SIGN_UP='SIGN_UP'
export const LOG_IN='LOG_IN'

interface ISignUp{
  email: string,
  password: string
}

export class SignUpAction implements Action{

  readonly type= SIGN_UP
  constructor(public payload: ISignUp ) {
  }
}

export type AuthActions=SignUpAction
