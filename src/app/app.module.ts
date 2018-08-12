import { BrowserModule } from '@angular/platform-browser';
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


const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'general', component: GeneralPageComponent },
  { path: 'station', component: StationPageComponent },
  { path: 'riverbasin', component: RiverBasinPageComponent },
  { path: 'province', component: ProvincePageComponent },
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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
