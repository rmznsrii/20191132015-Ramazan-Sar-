import { Component, OnInit } from '@angular/core';
import { FbservisService2 } from './../../services/fbServis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public fbServis: FbservisService2,
    public router: Router
  ) { }

  ngOnInit() {
  }
  OturumuKapat() {
    this.fbServis.OturumKapat().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(['/login']);
    });
  }

}
