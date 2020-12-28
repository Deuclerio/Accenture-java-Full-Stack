import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Task } from 'src/model/task';
 
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:8080/task';

@Injectable({
  providedIn: 'root'
})
export class TaskApiService {

  constructor(private http: HttpClient) { }

  getTasks (): Observable<Task[]> {
    return this.http.get<Task[]>(apiUrl)
      .pipe(
        tap(tasks => console.log('leu os Tasks')),
        catchError(this.handleError('getTasks', []))
      );
  }

  getTask(id: number): Observable<Task> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Task>(url).pipe(
      tap(_ => console.log(`leu o Task id=${id}`)),
      catchError(this.handleError<Task>(`getTask id=${id}`))
    );
  }

  addTask (task): Observable<Task> {
    return this.http.post<Task>(apiUrl, task, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((task: Task) => console.log(`adicionou o Task com w/ id=${task.id}`)),
      catchError(this.handleError<Task>('addTask'))
    );
  }

  updateTask(id, task): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, task, httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${id}`)),
      catchError(this.handleError<any>('updateTask'))
    );
  }

  deleteTask(id): Observable<Task> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Task>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o Task com id=${id}`)),
      catchError(this.handleError<Task>('deleteTask'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}