import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment';

  constructor( private _router:Router) { }

  //navigate registration form
  ngOnInit() {
    this._router.navigate(['registrationform']);
  }
}
