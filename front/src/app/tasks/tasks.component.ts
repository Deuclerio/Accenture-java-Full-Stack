import { Component, OnInit } from '@angular/core';
import { TaskApiService } from '../service/task-api.service';
import { Task } from 'src/model/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  displayedColumns: string[] = [ 'description', 'sn_done'];
  dataSource: Task[];  
  isLoadingResults = true;
  constructor( private _api: TaskApiService) { }

  ngOnInit() {
    this._api.getTasks()
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
