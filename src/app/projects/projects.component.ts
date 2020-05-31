import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less'],
})
export class ProjectsComponent implements OnInit {
  projects: Array<object>;

  constructor(private _data: DataService) {}

  ngOnInit(): void {
    this.projects = this._data.getData();
  }
}
