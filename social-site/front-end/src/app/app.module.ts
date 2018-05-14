import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListProfilesComponent } from './list-profiles/list-profiles.component';
import { ReadProfileComponent } from './read-profile/read-profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { FormsModule } from '@angular/forms';


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
];

@NgModule({
  declarations: [
    AppComponent,
    ListProfilesComponent,
    ReadProfileComponent,
    CreateProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
