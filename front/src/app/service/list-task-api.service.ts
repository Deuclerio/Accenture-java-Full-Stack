import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { ListTask } from 'src/model/listTask';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:8080/listTask';

@Injectable({
  providedIn: 'root'
})
export class ListTaskApiService {
  constructor(private http: HttpClient) { }

  getListTasks (): Observable<ListTask[]> {
    return this.http.get<ListTask[]>(apiUrl)
      .pipe(
        tap(tasks => console.log('leu os ListTask')),
        catchError(this.handleError('getListTask', []))
      );
  }

  getListTask(id: number): Observable<ListTask> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<ListTask>(url).pipe(
      tap(_ => console.log(`leu o Task id=${id}`)),
      catchError(this.handleError<ListTask>(`getTask id=${id}`))
    );
  }

  addListTask (listTask): Observable<ListTask> {
    return this.http.post<ListTask>(apiUrl, listTask, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((listTask: ListTask) => console.log(`adicionou o Task com w/ id=${listTask.id}`)),
      catchError(this.handleError<ListTask>('addTask'))
    );
  }

/*  updateTask(id, task): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, task, httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${id}`)),
      catchError(this.handleError<any>('updateTask'))
    );
  }
*/
 /* deleteTask (id): Observable<Task> {
    const url = `${apiUrl}/delete/${id}`;

    return this.http.delete<Task>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o Task com id=${id}`)),
      catchError(this.handleError<Task>('deleteTask'))
    );
  }*/

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}