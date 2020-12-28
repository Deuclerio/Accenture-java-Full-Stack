import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ListTaskApiService } from 'src/app/service/list-task-api.service';
 
@Component({
  selector: 'app-list-task-new',
  templateUrl: './list-task-new.component.html',
  styleUrls: ['./list-task-new.component.scss']
})
export class ListTaskNewComponent implements OnInit {

  ListTaskForm: FormGroup;
  isLoadingResults = false;
  constructor(private router: Router, private api: ListTaskApiService, private formBuilder: FormBuilder) { }

    ngOnInit() {
      this.ListTaskForm = this.formBuilder.group({
    'description' : [null, Validators.required]
  });
  }
  addListTask(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addListTask(form)
      .subscribe(res => {

        console.log(res['id']);
          const id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/list-task']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }
}
