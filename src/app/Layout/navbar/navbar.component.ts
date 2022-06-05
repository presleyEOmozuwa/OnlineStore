import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromLoginSelector from 'src/app/store/selectors/login.selectors';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit 
{
  vm: any;
  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void 
  {
    this.loginResponseData();
  }

  loginResponseData(){
    this.store.pipe(select(fromLoginSelector.selectLinksModel)).subscribe(data => this.vm = data);
  }

  
/*   isLoggedIn(): Boolean
  {
    if(localStorage.getItem('token'))
    {
      return true;
    }
    else
    {
      return false;
    }
  } */

}
