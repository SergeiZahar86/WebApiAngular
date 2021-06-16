import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitComponent } from './pages/home-page/components/init/init.component';
import { AboutComponent } from './pages/about-page/about/about.component';
import { JjComponent } from './pages/home-page/components/jj/jj.component';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    AboutComponent,
    JjComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
