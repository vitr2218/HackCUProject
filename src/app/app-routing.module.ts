import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { JobsComponent } from './jobs/jobs.component';


const routes: Routes = [
  {
    component:AboutComponent,
    path: 'about'
  }, {
    component:ContactComponent,
    path: 'contact'
  },  {
    component:MarketplaceComponent,
    path: 'marketplace'
  }, 
  {
    component:JobsComponent,
    path: 'jobs'
  },{
    component:HomeComponent,
    path: '**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
