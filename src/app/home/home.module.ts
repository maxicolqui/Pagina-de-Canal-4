import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { ProductoComponent } from './producto/producto.component';
import { ServicioComponent } from './servicio/servicio.component';
import { ErrorComponent } from './error/error.component';
import { NetComponent } from './net/net.component';
import { AppRoutingModule } from '../app-routing.module';
import { DouComponent } from './dou/dou.component';
import { Combodou100Component } from './combodou100/combodou100.component';
import { Combodou300Component } from './combodou300/combodou300.component';
import { HotsaleComponent } from './hotsale/hotsale.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    CarsComponent,
    PromocionesComponent,
    ProductoComponent,
    ServicioComponent,
    ErrorComponent,
    NetComponent,
    DouComponent,
    Combodou100Component,
    Combodou300Component,
    HotsaleComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class HomeModule { }
