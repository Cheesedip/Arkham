import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface LastVisitedLocation {
  actKey: string;
  locationId: number;
}

@Injectable({
  providedIn: 'root'
})
export class LastVisitedLocationService {
  private readonly storageKey = 'arkham:last-visited-location';
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private readonly state = signal<LastVisitedLocation | null>(this.readInitialState());

  readonly lastVisitedLocation = this.state.asReadonly();

  markVisited(actKey: string, locationId: number): void {
    const nextState: LastVisitedLocation = { actKey, locationId };
    this.state.set(nextState);

    if (this.isBrowser) {
      window.localStorage.setItem(this.storageKey, JSON.stringify(nextState));
    }
  }

  isLastVisited(actKey: string, locationId: number): boolean {
    const current = this.state();
    return current?.actKey === actKey && current.locationId === locationId;
  }

  private readInitialState(): LastVisitedLocation | null {
    if (!this.isBrowser) {
      return null;
    }

    const rawValue = window.localStorage.getItem(this.storageKey);
    if (!rawValue) {
      return null;
    }

    try {
      const parsed = JSON.parse(rawValue) as Partial<LastVisitedLocation>;
      if (typeof parsed.actKey !== 'string' || typeof parsed.locationId !== 'number') {
        return null;
      }
      return {
        actKey: parsed.actKey,
        locationId: parsed.locationId
      };
    } catch {
      return null;
    }
  }
}
