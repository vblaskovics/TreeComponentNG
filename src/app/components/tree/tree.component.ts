import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  tree: any

  constructor(private dataService:DataService) {
    this.tree = dataService.getTree()
  }

  ngOnInit(): void {
  }

  isFolder(node:any): boolean {
    return Array.isArray(node.items)
  }

  toggleFolder(node:any): void {
    node.closed = !node.closed;
  }

}
