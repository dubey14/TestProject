import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-project';
  public isSubTextVisible: boolean = false;

  public toggleSubText() {
    this.isSubTextVisible = this.isSubTextVisible ? false : true;
  }
}
