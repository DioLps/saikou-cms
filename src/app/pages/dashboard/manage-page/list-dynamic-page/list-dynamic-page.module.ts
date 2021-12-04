import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListDynamicPageComponent } from './list-dynamic-page.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListDynamicPageComponent,
      },
    ]),
  ],
})
export class ListDynamicPageModule {}
