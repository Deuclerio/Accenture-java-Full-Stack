import { Component, OnInit } from '@angular/core';
import {ListTaskApiService} from '../service/list-task-api.service'
import {ListTask} from 'src/model/listTask'

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss'] 
})
export class ListTasksComponent implements OnInit {
  displayedColumns: string[] = ['id', 'description','acao'];
  dataSource: ListTask[];
  isLoadingResults = true;
  constructor(private _api: ListTaskApiService) { }

  ngOnInit() {
    this._api.getListTasks()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}
