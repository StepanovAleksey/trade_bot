import { Component } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'clientApp';
  constructor(private dataSrv: DataService) {
    this.dataSrv.getData().subscribe((data) => {
      this.title = data;
    });
  }
}
