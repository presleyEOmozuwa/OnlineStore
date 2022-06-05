import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordService } from '../custom-validator/confirm-password.service';
import { IRegisterUser } from '../interfaces/register-user.interfaces';
import { Store } from '@ngrx/store';
import { registerData } from '../store/actions/register.actions';
import { AppState } from '../store';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  @ViewChild('registerModal') registerModal: ElementRef;
  registerForm: FormGroup;
  
  constructor(private fb: FormBuilder, private passwordValidator: ConfirmPasswordService, private store: Store<AppState>, private router: Router, private route: ActivatedRoute, private registerService: RegisterService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: [this.passwordValidator.match('password', 'confirmPassword')] });
  };

  
  onSubmit(): void
  {
    const userData: IRegisterUser = this.registerForm.value;
    this.store.dispatch(registerData({payload: userData}));
    this.router.navigate(['/security/alert-email-confirmation']);
  }


  
  get f(): { [key: string]: AbstractControl } 
  {
    return this.registerForm.controls;
  }

}