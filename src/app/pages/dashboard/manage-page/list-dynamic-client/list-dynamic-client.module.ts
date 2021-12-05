import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListDynamicClientComponent } from './list-dynamic-client.component';

@NgModule({
  declarations: [ListDynamicClientComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListDynamicClientComponent,
      },
    ]),
  ],
})
export class ListDynamicClientModule {}
