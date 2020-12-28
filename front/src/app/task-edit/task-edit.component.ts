import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TaskApiService } from 'src/app/service/task-api.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
  id:number;
  sn_done:string;
  taskForm: FormGroup;


  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: TaskApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getTask(this.route.snapshot.params['id']);
    this.taskForm = this.formBuilder.group({
    'sn_done' : [null, Validators.required]
  });
  }

  getTask(id) {
    this.api.getTask(id).subscribe(data => {
      this.id = data.id;
      this.taskForm.setValue({
        sn_done: data.sn_done
      });
    });
  }
  
  updateTask(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateTask(this.id, form)
      .subscribe(res => {
          this.isLoadingResults = false;
          //this.router.navigate(['' + this.id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
    }
}
