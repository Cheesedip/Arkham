import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActComponent } from './act.component';
import { ACT1_INTRO_LINES } from './act-1-intro';
import { ACT1_LOCATIONS } from './act1-locations';

@Component({
  selector: 'app-act-1',
  standalone: true,
  imports: [CommonModule, ActComponent],
  templateUrl: './act-1.component.html',
  styleUrls: ['./act-1.component.scss']
})
export class Act1Component implements OnInit {
  introLines = ACT1_INTRO_LINES;
  locations = ACT1_LOCATIONS;

  ngOnInit(): void {
    // no-op: ActComponent handles rendering and layout
  }
}
