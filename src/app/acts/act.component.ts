import { Component, Input, signal, ChangeDetectionStrategy, inject, OnChanges, PLATFORM_ID, SimpleChanges } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LocationComponent } from './location.component';
import type { Location } from './location.model';
import { LastVisitedLocationService } from '../services/last-visited-location.service';

interface Position {
  x: number;
  y: number;
}

interface LocationNode {
  location: Location;
  x: number;
  y: number;
}

interface ConnectionLine {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

@Component({
  selector: 'app-act',
  standalone: true,
  imports: [CommonModule, LocationComponent],
  templateUrl: './act.component.html',
  styleUrls: ['./act.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActComponent implements OnChanges {
  @Input() actTitle = '';
  @Input() introLines: string[] = [];
  @Input() lastLine?: string;

  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly lastVisitedLocationService = inject(LastVisitedLocationService);
  private readonly introStateStoragePrefix = 'arkham:intro-expanded';
  private introStateStorageKey = `${this.introStateStoragePrefix}:default`;

  private _locations: Location[] = [];
  private positionsMap = new Map<number, Position>();

  introExpanded = signal(true);
  locationNodesData = signal<LocationNode[]>([]);
  connectionLinesData = signal<ConnectionLine[]>([]);
  selectedLocation: Location | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['actTitle']) {
      this.restoreIntroExpandedState();
    }
  }

  @Input()
  set locations(value: Location[] | null | undefined) {
    this._locations = value ?? [];
    this.buildNetwork();
  }

  get locations(): Location[] {
    return this._locations;
  }

  locationNodes(): LocationNode[] {
    return this.locationNodesData();
  }

  connectionLines(): ConnectionLine[] {
    return this.connectionLinesData();
  }

  onLocationClick(location: Location) {
    this.lastVisitedLocationService.markVisited(this.actKey(), location.id);
    this.selectedLocation = location;
  }

  isLastVisitedLocation(location: Location): boolean {
    return this.lastVisitedLocationService.isLastVisited(this.actKey(), location.id);
  }

  toggleIntroExpanded(): void {
    const nextValue = !this.introExpanded();
    this.introExpanded.set(nextValue);

    if (this.isBrowser) {
      window.localStorage.setItem(this.introStateStorageKey, String(nextValue));
    }
  }

  introContentId(): string {
    return `intro-content-${this.actKey()}`;
  }

  private actKey(): string {
    return this.buildActSlug(this.actTitle);
  }

  private restoreIntroExpandedState(): void {
    this.introStateStorageKey = `${this.introStateStoragePrefix}:${this.buildActSlug(this.actTitle)}`;

    if (!this.isBrowser) {
      this.introExpanded.set(true);
      return;
    }

    const stored = window.localStorage.getItem(this.introStateStorageKey);
    this.introExpanded.set(stored === null ? true : stored === 'true');
  }

  private buildActSlug(value: string): string {
    const slug = value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    return slug || 'default';
  }

  private buildNetwork(): void {
    if (!this.locations || this.locations.length === 0) {
      this.locationNodesData.set([]);
      this.connectionLinesData.set([]);
      return;
    }

    this.runForceLayout(this.locations);
    this.updateLocationNodes(this.locations);
    this.updateConnectionLines(this.locations);
  }

  private runForceLayout(locations: Location[]): void {
    const width = 1000;
    const height = 700;
    const margin = 60;
    const area = width * height;
    const n = locations.length;

    if (n === 0) {
      return;
    }

    const positions: Position[] = locations.map((location, i) => {
      const angle = (i / n) * Math.PI * 2;
      const radius = Math.min(width, height) * 0.35;
      return {
        x: width / 2 + radius * Math.cos(angle) + (Math.random() - 0.5) * 18,
        y: height / 2 + radius * Math.sin(angle) + (Math.random() - 0.5) * 18
      };
    });

    const edges: { u: number; v: number }[] = [];
    const idToIndex = new Map<number, number>();
    locations.forEach((loc, idx) => idToIndex.set(loc.id, idx));

    locations.forEach((loc, idx) => {
      loc.attached.forEach(attachedId => {
        const connectedIndex = idToIndex.get(attachedId);
        if (connectedIndex === undefined || connectedIndex <= idx) {
          return;
        }
        edges.push({ u: idx, v: connectedIndex });
      });
    });

    const k = Math.sqrt(area / n);
    let t = Math.max(width, height) / 10;
    const iterations = 200;

    for (let iter = 0; iter < iterations; iter++) {
      const disp: { x: number; y: number }[] = Array.from({ length: n }, () => ({ x: 0, y: 0 }));

      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          let dx = positions[i].x - positions[j].x;
          let dy = positions[i].y - positions[j].y;
          let dist = Math.hypot(dx, dy) || 0.001;
          const force = (k * k) / dist;
          const ux = dx / dist;
          const uy = dy / dist;
          disp[i].x += ux * force;
          disp[i].y += uy * force;
          disp[j].x -= ux * force;
          disp[j].y -= uy * force;
        }
      }

      edges.forEach(edge => {
        const i = edge.u;
        const j = edge.v;
        let dx = positions[i].x - positions[j].x;
        let dy = positions[i].y - positions[j].y;
        let dist = Math.hypot(dx, dy) || 0.001;
        const force = (dist * dist) / k;
        const ux = dx / dist;
        const uy = dy / dist;
        disp[i].x -= ux * force;
        disp[i].y -= uy * force;
        disp[j].x += ux * force;
        disp[j].y += uy * force;
      });

      for (let i = 0; i < n; i++) {
        const dx = disp[i].x;
        const dy = disp[i].y;
        const dispLen = Math.hypot(dx, dy) || 0.001;
        const minDisp = Math.min(dispLen, t);
        positions[i].x += (dx / dispLen) * minDisp;
        positions[i].y += (dy / dispLen) * minDisp;
        positions[i].x = Math.max(margin, Math.min(width - margin, positions[i].x));
        positions[i].y = Math.max(margin, Math.min(height - margin, positions[i].y));
      }

      t *= 0.96;
    }

    locations.forEach((location, idx) => {
      const position = positions[idx];
      this.positionsMap.set(location.id, {
        x: Math.round(position.x),
        y: Math.round(position.y)
      });
    });
  }

  private updateLocationNodes(locations: Location[]): void {
    const nodes = locations.map(location => ({
      location,
      x: this.positionsMap.get(location.id)?.x ?? 0,
      y: this.positionsMap.get(location.id)?.y ?? 0
    }));
    this.locationNodesData.set(nodes);
  }

  private updateConnectionLines(locations: Location[]): void {
    const lines: ConnectionLine[] = [];
    const seen = new Set<string>();
    let nextId = 0;

    locations.forEach(location => {
      const sourcePos = this.positionsMap.get(location.id);
      if (!sourcePos) {
        return;
      }

      location.attached.forEach(attachedId => {
        const targetPos = this.positionsMap.get(attachedId);
        if (!targetPos) {
          return;
        }

        const edgeKey = [location.id, attachedId].sort((a, b) => a - b).join('-');
        if (seen.has(edgeKey)) {
          return;
        }

        seen.add(edgeKey);
        lines.push({
          id: `line-${nextId++}`,
          x1: sourcePos.x,
          y1: sourcePos.y,
          x2: targetPos.x,
          y2: targetPos.y
        });
      });
    });

    this.connectionLinesData.set(lines);
  }
}
