import { Component, OnInit } from '@angular/core';
import { FbservisService2 } from 'src/app/services/fbServis.service';
import { Uye } from './../../models/uye';

import { Sonuc } from './../../models/sonuc';

import { Router } from '@angular/router';

@Component({
  selector: 'app-uyeregister',
  templateUrl: './uyeregister.component.html',
  styleUrls: ['./uyeregister.component.css']
})
export class UyeregisterComponent implements OnInit {
  sonuc: Sonuc = new Sonuc();
  secUye: Uye = new Uye();
  constructor(
    public fbServis: FbservisService2,
    public router: Router
  ) { }
  ngOnInit() {
  }
  KayitYap() {
    this.fbServis.UyeOl(this.secUye).then(d => {
      d.user.updateProfile({
        displayName: this.secUye.adsoyad
      }).then();
      this.secUye.uid = d.user.uid;
      localStorage.setItem("user", JSON.stringify(d.user));
      this.UyeEkle();
    }, err => {
      this.sonuc.islem = false;
      this.sonuc.mesaj = "Hata Oluştu Tekrar Deneyiniz!";
    });
  }
  UyeEkle() {
    this.fbServis.UyeEkle(this.secUye).then(d => {
      this.router.navigate(['/']);
    });
  }


}
