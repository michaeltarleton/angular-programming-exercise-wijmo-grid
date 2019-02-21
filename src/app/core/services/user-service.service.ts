import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

export interface IUser {
  id: number
  name: string
  email: string
  phone: string
  active: boolean
  percent: number
  cashOnHand: number
  dateOfBirth: Date
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getData(): Observable<ReadonlyArray<IUser>> {
    const url = 'https://my-json-server.typicode.com/michaeltarleton/json-server-sample-db/users'
    return this.http.get<ReadonlyArray<IUser>>(url).pipe(catchError(e => throwError(console.log(e))))
  }
}
