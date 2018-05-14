import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ListProfilesComponent } from './list-profiles/list-profiles.component';
import { ReadProfileComponent } from './read-profile/read-profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { FormsModule } from '@angular/forms';
import { UpdateProfileComponent } from './update-profile/update-profile.component';


const routes: Routes = [

  {
    path: 'profiles',
    component: ListProfilesComponent
  },
  {
    path: 'profiles/new',
    component: CreateProfileComponent
  },
  
  {
    path: 'profiles/:id',
    component: ReadProfileComponent
  },
  {
    path: 'profiles/edit/:id',
    component: UpdateProfileComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListProfilesComponent,
    ReadProfileComponent,
    CreateProfileComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
