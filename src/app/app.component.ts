import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JOURNEY';
  public onButtonClick(): void {
    console.log("click");
    alert("Kendo Angular UI Button was clicked.");
  }
}
