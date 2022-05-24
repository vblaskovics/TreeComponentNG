import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent implements OnInit {
  tree: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.tree = this.dataService.getTree();
  }
}
