import { DataService } from './providers/data.service';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(
    @Inject('DataService') public ds: DataService
  ) { }
}
