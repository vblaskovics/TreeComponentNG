import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.css'],
})
export class TreeItemComponent implements OnInit {
  @Input() nodeData: any
  closed:boolean = false

  constructor() {}

  ngOnInit(): void {}

  get isFolder():boolean {
    return Array.isArray(this.nodeData.items)
  }

  toggleFolder(): void {
    this.closed = !this.closed;
  }
}
