import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./pages/about-page/about/about.component";
import {InitComponent} from "./pages/home-page/components/init/init.component";

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: '', component: InitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
