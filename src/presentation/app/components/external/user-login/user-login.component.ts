import { Component, inject } from '@angular/core';
import {CommonModule} from "@angular/common";
import {UserLoginUsecase} from "../../../../../domain/usecases/user-login.usecase";  
import { DataModule } from '../../../../../data/data.module';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [DataModule, CommonModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export default class UserLoginComponent {
  private loginUC = inject(UserLoginUsecase); 
  login(){
    this.loginUC.execute({username : 'elmer', password: 'abc123'}).subscribe(res => {
      console.log(res)
    })
  }

}
