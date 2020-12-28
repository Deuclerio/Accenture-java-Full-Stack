import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TaskApiService } from 'src/app/service/task-api.service';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.scss']
})
export class TaskNewComponent implements OnInit {
  TaskForm: FormGroup;
  isLoadingResults = false;
  constructor(private router: Router, private api: TaskApiService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.TaskForm = this.formBuilder.group({'description':[null], 'sn_done':[null] });

  }
  addTask(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addTask(form)
      .subscribe(res => {
          const id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/list-task']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }
}
