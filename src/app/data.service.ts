import { Injectable } from '@angular/core';
import SampleData from '../data/SampleData.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getData(): Array<object> {
    return SampleData.projects;
  }
}
