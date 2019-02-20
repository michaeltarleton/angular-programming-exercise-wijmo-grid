import { Injectable } from '@angular/core';
import * as wjcCore from 'wijmo/wijmo';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  getData(count: number): wjcCore.ObservableArray {
    const countries = 'US,Germany,UK,Japan,Italy,Greece'.split(',')
    const data = new wjcCore.ObservableArray()

    for (let i = 0; i < count; i++) {
      data.push({
        id: i,
        country: countries[i % countries.length],
        date: new Date(2014, i % 12, i % 28),
        amount: Math.random() * 10000,
        active: i % 4 === 0,
        percent: Math.random() / 100
      });
    }

    return data;
  }
}
