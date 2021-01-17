import { Sonuc } from './../../models/sonuc';
import { FbServisService } from './../../services/fbServis.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { partitionArray } from '@angular/compiler/src/util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sonuc: Sonuc = new Sonuc();
  constructor(
    public fbservis: FbServisService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  GirisYap(mail: string, parola: string) {
    this.fbservis.OturumAc(mail, parola).then(d => {
      if (d.user) {
        localStorage.setItem("user", JSON.stringify(d.user));
        this.router.navigate(['/rsAdmin']);
      }
    }, err => {
      this.sonuc.islem = false;
      this.sonuc.mesaj = "Geçersiz E-posta veya şifre!";
    });
  }
}
