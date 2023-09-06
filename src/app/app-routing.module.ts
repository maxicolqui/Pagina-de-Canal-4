import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ErrorComponent } from './home/error/error.component';
import { NetComponent } from './home/net/net.component';
import { DouComponent } from './home/dou/dou.component';
import { Combodou100Component } from './home/combodou100/combodou100.component';
import { Combodou300Component } from './home/combodou300/combodou300.component';
import { HotsaleComponent } from './home/hotsale/hotsale.component';

const routes: Routes = [
  {path:"", redirectTo:"home" ,pathMatch:"full"},
  {path:"home" , component:HomeComponent},
  {path:"el-cuatro-net",component: NetComponent},
  {path:"combo-dou",component:DouComponent},
  {path:'combo-dou-100',component:Combodou100Component},
  {path:'combo-dou-300',component:Combodou300Component},
  {path:'promociones',component:HotsaleComponent},
  {path:'el-cuatro-net',component:HotsaleComponent},
  {path:'combo-dou-100',component:HotsaleComponent},
  {path:"**" , component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
