import { LoginComponent } from './components/login/login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { HomeComponent } from './components/Home/Home.component';
import { HikayemizComponent } from './components/Hikayemiz/Hikayemiz.component';
import { IletisimeGecComponent } from './components/IletisimeGec/IletisimeGec.component';
import { UrunlerComponent } from './components/urunler/urunler.component';
import { UyeloginComponent } from './components/uyelogin/uyelogin.component';
import { UyeregisterComponent } from './components/uyeregister/uyeregister.component';
import { RsAdminComponent } from './components/rsAdmin/rsAdmin.component';
import { StoklaraGelecekComponent } from './components/StoklaraGelecek/StoklaraGelecek.component';



const redirectLogin = () => redirectUnauthorizedTo(['/login']);
const routes: Routes = [

  {
    path: '',
    component:
    HomeComponent,

  }
  ,
  { path: 'login', component: LoginComponent },
  { path: 'kayitlar', component: KayitlarComponent },
  { path: 'Hikayemiz', component: HikayemizComponent },
  { path: 'IletisimeGec', component: IletisimeGecComponent },
  { path: 'urunler', component: UrunlerComponent },
  { path: 'rsAdmin', component: RsAdminComponent ,canActivate: [AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectLogin
  }},
  { path: 'uyelogin', component: UyeloginComponent },
  { path: 'uyeregister', component: UyeregisterComponent },
  { path: 'stoklaragelecek', component: StoklaraGelecekComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
