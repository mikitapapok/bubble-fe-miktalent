import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { DownloadFilesComponent } from './filesWorking/download-files/download-files.component';
import { UploadFilesComponent } from './filesWorking/upload-files/upload-files.component';
import {AppRoutingModule} from "./routing/app-routing.module";
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import {StoreModule} from "@ngrx/store";
import {combineReducers} from "./store/combineReducers";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DownloadFilesComponent,
    UploadFilesComponent,
    HomeComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(combineReducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
