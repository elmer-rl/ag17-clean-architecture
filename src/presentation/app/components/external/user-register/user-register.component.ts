import { Component, inject } from '@angular/core';
import {UserRegisterUsercase} from "../../../../../domain/usecases/user-register.usercase";
import {DataModule} from "../../../../../data/data.module";

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [DataModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss'
})
export default class UserRegisterComponent {
  private registerUC = inject(UserRegisterUsercase);
  
  register(){

    this.registerUC.execute({phoneNum: '929299292', password:'abc123'}).subscribe(res =>{
      console.log(res)
    })
  }

}
