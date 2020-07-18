import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'paineldiego';
  constructor(
    public router: Router,
   
) { }

  inicio(){
    this.router.navigate(['/empresas/']);
  }

  home(){
    this.router.navigate(['/']);
  }
  

}
