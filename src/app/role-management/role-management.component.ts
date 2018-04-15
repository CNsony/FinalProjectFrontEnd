import { Component, OnInit, NgModule } from '@angular/core';
import {DataTableModule} from "angular2-datatable"

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
@NgModule({
  imports:[
    DataTableModule
]
})
export class RoleManagementComponent implements OnInit {
  private mf;
  constructor() {
    this.mf=
    {
      data:[
        {
          name: "sony",
          email: "448597808@qq.com",
          studentRole: true,
          teacherRole: true,
          superRole: true
        }
      ]
    }
  }


  ngOnInit() {
  }

}
