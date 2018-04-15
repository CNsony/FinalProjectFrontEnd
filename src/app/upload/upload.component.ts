import { Component, OnInit } from '@angular/core';
import {tools} from "/assets/tool/tools"
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {


  constructor() {
    this.fileName = "Select File";
  }

  fileInfo(event):void{
    this.fileName = event.target.files[0].name;
  }

  upLoadFile():void{

  }
  ngOnInit() {
  }

}
