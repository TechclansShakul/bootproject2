import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinesscategoryComponent } from './businesscategory/businesscategory.component';
import { CityComponent } from './city/city.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ControlComponent } from './control/control.component';
import { ControlcategoryComponent } from './controlcategory/controlcategory.component';
import { DeliverableComponent } from './deliverable/deliverable.component';
import { DomainComponent } from './domain/domain.component';
import { DomaincategoryComponent } from './domaincategory/domaincategory.component';
import { HomeComponent } from './home/home.component';
import { LookupComponent } from './lookup/lookup.component';
import { OrgtypeComponent } from './orgtype/orgtype.component';
import { PriorityComponent } from './priority/priority.component';
import { SpecificationComponent } from './specification/specification.component';
import { SpecstatusComponent } from './specstatus/specstatus.component';
import { Page404Component } from './page404/page404.component';
import { NavService } from './services/nav.service';

@NgModule({
  declarations: [
    AppComponent,
    BusinesscategoryComponent,
    CityComponent,
    ConfigurationComponent,
    ControlComponent,
    ControlcategoryComponent,
    DeliverableComponent,
    DomainComponent,
    DomaincategoryComponent,
    HomeComponent,
    LookupComponent,
    OrgtypeComponent,
    PriorityComponent,
    SpecificationComponent,
    SpecstatusComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule
  ],
  entryComponents: [AppComponent],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
