import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SetupComponent } from './setup/setup.component';
import { Page404Component } from './page404/page404.component';
import { LookupComponent } from './lookup/lookup.component';
import { ControlcategoryComponent } from './controlcategory/controlcategory.component';
import { BusinesscategoryComponent } from './businesscategory/businesscategory.component';
import { DomaincategoryComponent } from './domaincategory/domaincategory.component';
import { DeliverableComponent } from './deliverable/deliverable.component';
import { CityComponent } from './city/city.component';
import { PriorityComponent } from './priority/priority.component';
import { SpecstatusComponent } from './specstatus/specstatus.component';
import { OrgtypeComponent } from './orgtype/orgtype.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { DomainComponent } from './domain/domain.component';
import { ControlComponent } from './control/control.component';
import { SpecificationComponent } from './specification/specification.component';
const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'configuration', component: ConfigurationComponent,
  children: [
  { path: 'domain', component: DomainComponent},
  { path: 'control', component: ControlComponent},
  { path: 'specification', component: SpecificationComponent},
  
    { path: 'lookup',  component: LookupComponent,
    children: [
    { path:'domaincategory',component: DomaincategoryComponent },
    { path:'controlcategory',component: ControlcategoryComponent },
    { path:'businesscategory',component: BusinesscategoryComponent },
    { path:'deliverable',component: DeliverableComponent },
    { path:'city',component: CityComponent },
    { path:'priority',component: PriorityComponent },
    { path:'specstatus',component: SpecstatusComponent },
    { path:'orgtype',component: OrgtypeComponent },
]},
    { path: '**', component:  Page404Component},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
]}
  ];



@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES,{ enableTracing: false })],       
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  SetupComponent,
  LookupComponent,
  DomaincategoryComponent,
  BusinesscategoryComponent,
  DeliverableComponent,
  CityComponent,
  ControlcategoryComponent,
  PriorityComponent,
  SpecstatusComponent,
  OrgtypeComponent,
  Page404Component,
  DomainComponent,
  ControlComponent,
  SpecificationComponent
];