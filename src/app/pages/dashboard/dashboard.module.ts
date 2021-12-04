import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ComponentsModule } from 'src/app/components';
import { DropWatcherService } from './drop-watcher.service';
import { DynamicCompsModule } from 'ishi-dynamic-components-shell';

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