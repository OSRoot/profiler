import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../core/shared/components/header/header.component';
import { SpinnerComponent } from '../../core/shared/components/spinner/spinner.component';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {


  getEndPoint():string{
    let endPoint = '/achievements';
    return endPoint
  }
}
