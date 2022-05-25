import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TreeNode } from 'src/app/interfaces/tree-node';

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.css'],
})
export class TreeItemComponent implements OnInit {
  @Input() nodeData: TreeNode | undefined;
  @Output() deleteMe: EventEmitter<TreeNode> = new EventEmitter<TreeNode>();
  closed: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  get isFolder(): boolean {
    return Array.isArray(this.nodeData?.items);
  }

  toggleFolder(): void {
    this.closed = !this.closed;
  }

  clickDelete(e: Event): void {
    e.stopPropagation();
    this.deleteMe.emit(this.nodeData);
  }

  deleteItem(nodeData: TreeNode): void {
    this.nodeData!.items = this.nodeData?.items?.filter(
      (item) => item.label !== nodeData.label
    );
  }
}
