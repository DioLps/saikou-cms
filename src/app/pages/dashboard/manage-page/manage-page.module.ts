import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ManagePageComponent } from './manage-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ManagePageService } from './manage-page.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ManagePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'list',
        loadChildren: () =>
          import('./list-dynamic-page/list-dynamic-page.module').then(
            (m) => m.ListDynamicPageModule
          ),
      },
      {
        path: 'skeleton',
        component: ManagePageComponent,
      },
    ]),
    DragDropModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [ManagePageService],
})
export class ManagePageModule {}
