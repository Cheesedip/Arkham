import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActComponent } from './act.component';
import { ACT2_INTRO_LINES, ACT2_LAST_LINE } from './act-2-intro';
import { ACT2_LOCATIONS } from './act2-locations';
import type { Location } from './location.model';

@Component({
  selector: 'app-act-2',
  standalone: true,
  imports: [CommonModule, ActComponent],
  templateUrl: './act-2.component.html',
  styleUrls: ['./act-2.component.scss']
})
export class Act2Component implements OnInit {
  introLines = ACT2_INTRO_LINES;
  lastLine = ACT2_LAST_LINE;
  locations: Location[] = ACT2_LOCATIONS;

  ngOnInit() {
    // no-op: ActComponent handles rendering and layout
  }
}

