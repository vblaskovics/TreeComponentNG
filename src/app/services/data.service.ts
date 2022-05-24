import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  tree: any;

  constructor() {
    this.tree = {
      label: 'Mappa1',
      items: [
        { label: 'Fájl1' },
        {
          label: 'Mappa2',
          items: [{ label: 'Fájl2 ' }, { label: 'Fájl3 ' }],
        },
        { label: 'Fájl4' },
      ],
    };
  }

  getTree() {
    return this.tree
  }
}
