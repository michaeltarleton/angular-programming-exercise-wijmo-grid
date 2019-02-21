import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface IUser {
  id: number
  name: string
  email: string
  phone: string
  active: boolean
  percent: number
  amountOwned: number
  dateJoined: Date
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getData(): Observable<ReadonlyArray<IUser>> {
    return this.http.get<ReadonlyArray<IUser>>('https://jsonplaceholder.typicode.com/users').pipe(map((users: ReadonlyArray<IUser>) => {
      console.log(Math.random())
      return users.map(u => ({
        ...u,
        percent: Math.random() / 100,
        amountOwned: Math.random() * 10000,
        active: Math.floor(Math.random() * 10) % 3 === 0,
        dateJoined: new Date(2014, Math.random() % 12, Math.random() % 28)
      }))
    }))
  }
}
