import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListProfilesComponent } from './list-profiles/list-profiles.component';
import { ReadProfileComponent } from './read-profile/read-profile.component';


const routes: Routes = [

  {
    path: 'profiles/:id',
    component: ReadProfileComponent
  },
  {
    path: 'profiles',
    component: ListProfilesComponent
  },

];

@NgModule({
  declarations: [
    AppComponent,
    ListProfilesComponent,
    ReadProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
