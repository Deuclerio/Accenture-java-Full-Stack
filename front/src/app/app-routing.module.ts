import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { ListTaskNewComponent } from './list-task-new/list-task-new.component';
import { ListTaskDetailComponent } from './list-task-detail/list-task-detail.component'


const routes: Routes = [
  {
    path: 'list-task',
    component: ListTasksComponent,
    data: { title: 'Lista de Tarefas' }
  },
  {
    path: 'list-task-new',
    component: ListTaskNewComponent,
    data: { title: 'Cadastro de Lista' }
  },
  {
    path: 'list-task-detail/:id',
    component: ListTaskDetailComponent,
    data: { title: 'Detalhe Lista' }
  },
  {
    path: 'task',
    component: TasksComponent,
    data: { title: 'Tarefas' }
  },
  {
    path: 'task-detail/:id',
    component: TaskDetailComponent,
    data: { title: 'Detalhe Tarefa' }
  },
  {
    path: 'task-new',
    component: TaskNewComponent,
    data: { title: 'Adicionar Tarefa' }
  },
  {
    path: 'task-edit/:id',
    component: TaskEditComponent,
    data: { title: 'Editar o Tarefa' }
  },
  { path: '',
    redirectTo: '/list-task',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
