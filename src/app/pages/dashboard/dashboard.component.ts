import { Component, OnInit } from '@angular/core';
import { DynamicCompsModel } from '@saikou/dynamic-components-shell';
import { Agency, BasicLanding, Portifolio } from '@saikou/ui';
import { DropWatcherService } from './drop-watcher.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public dynamicComponentsRef: Array<any>;

  constructor(private dropServ: DropWatcherService) {
    this.dynamicComponentsRef = [];
  }

  public ngOnInit(): void {
    this.dropServ.getDrop().subscribe((drops: Array<any>) => {
      this.dynamicComponentsRef = drops.map((drop) => {
        return this.getComponentFromLib(drop, [
          ...Agency.getComponents(),
          ...BasicLanding.getComponents(),
          ...Portifolio.getComponents(),
        ]);
      });
    });
  }

  private getComponentFromLib(
    drop: any,
    dynamicModule: Array<DynamicCompsModel>
  ) {
    const foundDynamicComponent = dynamicModule.find(
      (comp) => comp.id === drop.id
    );
    if (foundDynamicComponent) {
      foundDynamicComponent.data = drop.data;
    }

    return foundDynamicComponent;
  }
}
