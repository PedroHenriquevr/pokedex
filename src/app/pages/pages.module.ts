import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Module routing
import { RoutingModule } from './routing.module';

//Module
import { SharedModule } from '../shared/shared.module';
//pages
import { HomeComponent } from './home/home.component';
import { DetaisComponent } from './detais/detais.component';





@NgModule({
  declarations: [
    HomeComponent,
    DetaisComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
