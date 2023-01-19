import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PagesRoutes } from './pages.routing';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    RouterModule.forChild(PagesRoutes),
  ],
  providers: [],
})
export class PagesModule { }
