import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TreeComponent } from './components/tree/tree.component';
import { TreeItemComponent } from './components/tree-item/tree-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    TreeItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
