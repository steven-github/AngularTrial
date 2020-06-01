import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Project } from '../project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less'],
})
export class ProjectsComponent implements OnInit {
  projects: Array<Project>;

  constructor(private _data: DataService) {}

  ngOnInit(): void {
    this.projects = this._data.getData();
  }
}
