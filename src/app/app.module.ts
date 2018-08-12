import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './/app-routing.module';
import { NavComponent } from './nav/nav.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { GeneralPageComponent } from './general-page/general-page.component';
import { StationPageComponent } from './station-page/station-page.component';
import { RiverBasinPageComponent } from './river-basin-page/river-basin-page.component';
import { ProvincePageComponent } from './province-page/province-page.component';


/*const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];*/

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
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
