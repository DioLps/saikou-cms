import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './header';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatIconModule, RouterModule.forChild([])],
  exports: [HeaderComponent],
})
export class ComponentsModule {}
