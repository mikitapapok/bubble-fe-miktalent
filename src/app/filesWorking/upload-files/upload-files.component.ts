import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit {
  fileName:string=''
  file: File|undefined=undefined;
  constructor() { }

  ngOnInit(): void {
  }
  onUploadHandler(event: Event){
      const input= event.target as HTMLInputElement

    if(input.files?.[0]){
      this.file=input.files?.[0]
      this.fileName=this.file.name
      console.log(this.file)
    }

  }
}
