import { Component, OnInit } from '@angular/core';
import { FbservisService2 } from 'src/app/services/fbServis.service';

import { Sonuc } from './../../models/sonuc';

import { Router } from '@angular/router';
import { partitionArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-uyelogin',
  templateUrl: './uyelogin.component.html',
  styleUrls: ['./uyelogin.component.css']
})
export class UyeloginComponent implements OnInit {
  sonuc: Sonuc = new Sonuc();
  constructor(
    public fbServis: FbservisService2,
    public router: Router
  ) { }

  ngOnInit() {
  }
  GirisYap(mail: string, parola: string) {
    this.fbServis.OturumAc(mail, parola).then(d => {
      localStorage.setItem("user", JSON.stringify(d.user));
      this.router.navigate(['/']);
    }, err => {
      this.sonuc.islem = false;
      this.sonuc.mesaj = "E-Posta Adresi veya Parola Geçersizdir!";
    });
  }

}
