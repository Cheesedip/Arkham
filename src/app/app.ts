import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Act1Component } from './acts/act-1.component';
import { Act2Component } from './acts/act-2.component';
import { Act3Component } from './acts/act-3.component';
import { ResolutionsComponent } from './resolutions/resolutions.component';

@Component({
  selector: 'app-root',
  imports: [Act1Component, Act2Component, Act3Component, ResolutionsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('arkham');
  activeTab = signal<1 | 2 | 3 | 4>(1);

  setTab(tab: 1 | 2 | 3 | 4): void {
    this.activeTab.set(tab);
  }

  openResolutions(): void {
    const password = window.prompt('Enter password to open Resolutions');
    if (password === 'banaan') {
      this.activeTab.set(4);
    }
  }
}
