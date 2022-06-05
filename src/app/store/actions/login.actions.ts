import { createAction, props } from '@ngrx/store';
import { ILoginData } from '../../interfaces/login.interface';
import { IUser } from '../../interfaces/current.interface';
import { IExternalLogin } from 'src/app/interfaces/external.interface';

export const loginPage = createAction(
  '[Login Component] Login_Form_Submitted',
  props<{ payload: ILoginData }>()
);

export const loginView = createAction(
  '[Login Component] Login_With_Google',
    props<{ provider: string, idToken: string }>()
);

export const loginSuccessGoogle = createAction(
  '[Login Effect] Login_With_Google_Succeeded',
  props<{ user: IUser }>()
);

export const loginFailureGoogle = createAction(
  '[Login Effect] Login_With_Google_Failed',
  props<{ error: any }>()
);

export const loginSuccess = createAction(
  '[Login Effect] Login_Succeeded',
  props<{ user: IUser }>()
);

export const loginFailure = createAction(
  '[Login Effect] Login_Failed',
  props<{ error: any }>()
);

export const authLinksReload = createAction(
  '[Auth_Links Component] Auth_Links_Reload',
  props<{ user: IUser }>()
);


export const logOut = createAction('[Auth Links Component] Logout_User')






