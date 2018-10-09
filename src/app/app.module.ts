import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { NavComponent } from './nav/nav.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { GeneralPageComponent } from './general-page/general-page.component';
import { StationPageComponent } from './station-page/station-page.component';
import { RiverBasinPageComponent } from './river-basin-page/river-basin-page.component';
import { ProvincePageComponent } from './province-page/province-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IconHelperComponent } from './icon-helper/icon-helper.component';
import { ReportPageComponent } from './report-page/report-page.component';
import {DataTableModule} from "angular-6-datatable";
import { ExcelService } from './excel.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {NgxChartsModule} from '@swimlane/ngx-charts';


const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'general', component: GeneralPageComponent },
  { path: 'station', component: StationPageComponent },
  { path: 'riverbasin', component: RiverBasinPageComponent },
  { path: 'province', component: ProvincePageComponent },
  { path: 'report', component: ReportPageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingPageComponent,
    FooterPageComponent,
    GeneralPageComponent,
    StationPageComponent,
    RiverBasinPageComponent,
    ProvincePageComponent,
    PageNotFoundComponent,
    IconHelperComponent,
    ReportPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true,useHash:true } // <-- debugging purposes only
    ),
    DataTableModule,
    NgbModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
