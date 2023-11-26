import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './core/shared/components/spinner/spinner.component';
import { HeaderComponent } from './core/shared/components/header/header.component';
import { FooterComponent } from './core/shared/components/footer/footer.component';
import { HomeComponent } from './module/home/home.component';
import { AboutComponent } from './module/about/about.component';
import { BlogComponent } from './module/blog/blog.component';
import { BlogDetailsComponent } from './module/blog-details/blog-details.component';
import { ContactsComponent } from './module/contacts/contacts.component';
import { BusinessComponent } from './module/business/business.component';
import { AchievementsComponent } from './module/achievements/achievements.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    BlogDetailsComponent,
    ContactsComponent,
    BusinessComponent,
    AchievementsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
