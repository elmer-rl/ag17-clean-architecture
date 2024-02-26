import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-external',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './external.component.html',
  styleUrl: './external.component.scss'
})
export default class ExternalComponent {

}
