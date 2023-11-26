import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module/home/home.component';
import { AboutComponent } from './module/about/about.component';
import { BusinessComponent } from './module/business/business.component';
import { AchievementsComponent } from './module/achievements/achievements.component';
import { BlogComponent } from './module/blog/blog.component';
import { ContactsComponent } from './module/contacts/contacts.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
},
{
    path:'home',
    component:HomeComponent
},
{
    path:'about',
    component:AboutComponent
},
{
    path:'business',
    component:BusinessComponent
},
{
    path:'achievements',
    component:AchievementsComponent
},
{
    path:'blog',
    component:BlogComponent
},
{
    path:'contacts',
    component:ContactsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
