import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {UploadFilesComponent} from "../filesWorking/upload-files/upload-files.component";
import {DownloadFilesComponent} from "../filesWorking/download-files/download-files.component";
import {AuthGuardService} from "./authGuards/auth-guard.service";
import {AuthComponent} from "../auth/auth.component";

const routes: Routes=[
  {path: '',component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'upload', component: UploadFilesComponent, },
  {path: 'download', component: DownloadFilesComponent},
  {path: 'login',component: AuthComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[ RouterModule]
})
export class AppRoutingModule{}
