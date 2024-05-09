import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export default class HistoryComponent {

}
