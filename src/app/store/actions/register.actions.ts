import { createAction, props } from '@ngrx/store';
import { IRegisterResponse, IRegisterUser } from 'src/app/interfaces/register-user.interfaces';

export const registerData = createAction(
  '[Register Component] Register_Form_Submitted',
  props<{ payload: IRegisterUser }>()
);

export const registerSuccess = createAction(
  '[Register Effect] Registration_Succeeded',
  props<{ res: IRegisterResponse }>()
);

export const registerFailure = createAction(
  '[Register Effect] Registration_Failed',
  props<{ error: any }>()
);
