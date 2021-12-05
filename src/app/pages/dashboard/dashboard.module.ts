import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DropWatcherService } from './drop-watcher.service';

import { ComponentsModule } from 'src/app/shared';
import { DynamicCompsModule } from '@saikou/dynamic-components-shell';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    DashboardRoutingModule,
    DynamicCompsModule,
  ],
  providers: [DropWatcherService],
})
export class DashboardModule {}
