import { Component, OnInit } from '@angular/core';
import { SignInComponent } from 'src/app/Shared/Modals/sign-in/sign-in.component';

// import { DialogService } from "@progress/kendo-angular-dialog";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // constructor(private _dialog: DialogService) { }
  constructor() { }

  ngOnInit(): void {
  }


  openSignInModal() {
    // this._dialog.open({
    //   title: "Please confirm",
    //   content: SignInComponent,
    //   actions: [{ text: "Cancel" }, { text: "Delete", themeColor: "primary" }],
    // });
  }
}
