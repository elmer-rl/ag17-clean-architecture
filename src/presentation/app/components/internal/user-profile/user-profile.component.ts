import { Component, inject } from '@angular/core';
import {DataModule} from "../../../../../data/data.module";
import {GetUserProfileUsercase} from "../../../../../domain/usecases/get-user-profile.usercase";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [DataModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export default class UserProfileComponent {
 
  private getProfileUC = inject(GetUserProfileUsercase);
  
  getProfile(){
    this.getProfileUC.execute().subscribe(res=>{
      console.log(res)
    })
  }

}
