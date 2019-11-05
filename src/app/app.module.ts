import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitFormComponent } from './git-form/git-form.component';
import { GitNavbarComponent } from './git-navbar/git-navbar.component';
import { GitHomeComponent } from './git-home/git-home.component';
import { GithomeComponent } from './githome/githome.component';
import { RepositoriesComponent } from './repositories/repositories.component';

@NgModule({
  declarations: [
    AppComponent,
    GitFormComponent,
    GitNavbarComponent,
    GitHomeComponent,
    GithomeComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
