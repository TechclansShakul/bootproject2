import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit,CUSTOM_ELEMENTS_SCHEMA, VERSION} from '@angular/core';
import {NavItem} from './model/nav-item';
import {NavService} from './services/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit{
  @ViewChild('appDrawer') appDrawer!: ElementRef;
  version = VERSION;
  title = 'DMOUI';
navItems: NavItem[] = [
  {
    displayName: 'Configuration',
    route: '/configuration',
    children: [
      {
        displayName: 'Domain',
        route: '/domain',
      },
      {
        displayName: 'Control',
        route: '/control',
      },
      {
        displayName: 'Specification',
        route: '/specification',
      },
      {
        displayName: 'Lookup',
        route: '/lookup',
      }
]},
{
  displayName: 'Assessment',
  route: '/assessment',
},
{
  displayName: 'Complainant',
  route: '/complainant',
  children:[
    {
      displayName: 'Organisation',
      route: '/organisation',
    },
    {
      displayName: 'Complainant Master',
      route: '/complainantmaster',
    },
    {
      displayName: 'Complainant Detail',
      route: '/complainantdetail',
    },
  ]
},
{
  displayName: 'DMO Office',
  route: '/dmooffice',
},]
constructor(private navService: NavService) {}

ngAfterViewInit() {
  this.navService.appDrawer = this.appDrawer;
}
}

