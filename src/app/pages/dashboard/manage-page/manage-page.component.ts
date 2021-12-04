import { Component, OnDestroy, OnInit } from '@angular/core';
import { moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { DropWatcherService } from '../drop-watcher.service';
import { ManagePageService } from './manage-page.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-page',
  templateUrl: './manage-page.component.html',
  styleUrls: ['./manage-page.component.scss'],
})
export class ManagePageComponent implements OnInit, OnDestroy {
  public pageComponents: Array<any>;
  public components: Array<any>;

  private mySubs!: Subscription;

  constructor(
    private dropServ: DropWatcherService,
    private serv: ManagePageService
  ) {
    this.pageComponents = [];
    this.components = [];
  }

  public ngOnInit(): void {
    this.mySubs = this.serv
      .getAgencyTemplate()
      .subscribe((templates: Array<any>) => {
        this.components.push(...templates);
      });
    const mySub = this.serv
      .getPortolioTemplate()
      .subscribe((templates: Array<any>) => {
        this.components.push(...templates);
        this.mySubs.add(mySub);
      });
  }

  public ngOnDestroy(): void {
    this.mySubs?.unsubscribe();
  }

  public drop(event: any): any {
    if (event.container.id !== 'cdk-drop-list-0') {
      return null;
    }
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.dropServ.send(this.pageComponents);
  }

  public removeFromPageComponents(index: number): void {
    this.pageComponents.splice(index, 1);
    this.dropServ.send(this.pageComponents);
  }
}
