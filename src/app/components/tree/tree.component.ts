import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'src/app/interfaces/tree-node';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent implements OnInit {
  tree: TreeNode | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.tree = this.dataService.getTree();
  }

  deleteItem(item: TreeNode): void {
    console.log('delete item', item)
  }
}
