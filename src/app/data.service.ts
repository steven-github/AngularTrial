import { Injectable } from '@angular/core';
import SampleData from '../data/SampleData.json';
import { Project } from './project';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getData(): Array<Project> {
    return SampleData.projects;
  }
}
