import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule, BsDropdownModule } from 'ngx-bootstrap';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AuthGuard, UserInfoService } from "./service";
const APP_SERVICES = [AuthGuard, UserInfoService];

import { FullLayoutComponent, SimpleLayoutComponent } from './containers';
const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
];

import {
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
} from './components';

const APP_COMPONENTS = [
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
];

import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
];

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }, ...APP_SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
