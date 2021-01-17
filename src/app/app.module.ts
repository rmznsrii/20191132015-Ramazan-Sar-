import { StoklaraGelecekComponent } from './components/StoklaraGelecek/StoklaraGelecek.component';
import { StoklaraGelecekKayitComponent } from './components/StoklaraGelecekKayit/StoklaraGelecekKayit.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { HomeComponent } from './components/Home/Home.component';
import { UrunlerComponent } from './components/urunler/urunler.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { IletisimeGecComponent } from './components/IletisimeGec/IletisimeGec.component';
import { HikayemizComponent } from './components/Hikayemiz/Hikayemiz.component';
import { UyeloginComponent } from './components/uyelogin/uyelogin.component';
import { UyeregisterComponent } from './components/uyeregister/uyeregister.component';
import { RsAdminComponent } from './components/rsAdmin/rsAdmin.component';




@NgModule({
  declarations: [
    AppComponent,
    RsAdminComponent,
    LoginComponent,
    KayitlarComponent,
    HomeComponent,
    UrunlerComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    IletisimeGecComponent,
    HikayemizComponent,
    FooterComponent,
    UyeloginComponent,
    UyeregisterComponent,
    StoklaraGelecekKayitComponent,
    StoklaraGelecekComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
