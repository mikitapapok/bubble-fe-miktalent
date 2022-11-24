import * as AuthActions from "./auth.actions";
interface IAuth{
  email: string
  password: string
}
const initState:IAuth={
  email : '',
  password: ''
}

export function authReducer(state=initState,action: AuthActions.AuthActions){

  switch (action.type){
    case AuthActions.SIGN_UP:
      return { email: action.payload.email, password: action.payload.password};
    default:
      return state
  }
}
