import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from "@angular/common";
import {GetUserProfileUsercase} from "../../../../domain/usecases/get-user-profile.usercase";
@Component({
  selector: 'app-internal',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './internal.component.html',
  styleUrl: './internal.component.scss'
})
export default class InternalComponent {


}
