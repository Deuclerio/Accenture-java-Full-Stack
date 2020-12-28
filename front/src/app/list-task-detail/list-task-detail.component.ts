import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ListTaskApiService } from 'src/app/service/list-task-api.service';
import { ListTask } from 'src/model/listTask';
import { TaskApiService } from 'src/app/service/task-api.service';

@Component({
  selector: 'app-list-task-detail',
  templateUrl: './list-task-detail.component.html',
  styleUrls: ['./list-task-detail.component.scss']
})
export class ListTaskDetailComponent implements OnInit {
  listTask: ListTask = { id:null, description: '', listTasks:null};
  
  displayedColumns: string[] = [ 'description'];
  listTaske: ListTask[];
  
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ListTaskApiService, private api2: TaskApiService) { }


  ngOnInit(): void {
    this.getListTask(this.route.snapshot.params['id']);
  }

  getListTask(id) {
    this.api.getListTask(id)
      .subscribe(data => {
        this.listTask = data;
        console.log(this.listTask);
        this.isLoadingResults = false;
      }); 
  }

  deleteTask(id){
    this.isLoadingResults = true;
    this.api2.deleteTask(id).subscribe(res => {
      this.isLoadingResults = false;
      console.log(id);
    //  this.router.navigate(['']);
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}
