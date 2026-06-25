import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActComponent } from './act.component';
import { ACT3_INTRO_LINES, ACT3_LAST_LINE } from './act-3-intro';
import { ACT3_LOCATIONS } from './act3-locations';

@Component({
  selector: 'app-act-3',
  imports: [CommonModule, ActComponent],
  templateUrl: './act-3.component.html',
  styleUrls: ['./act-3.component.scss']
})
export class Act3Component {
  introLines = ACT3_INTRO_LINES;
  lastLine = ACT3_LAST_LINE;
  locations = ACT3_LOCATIONS;
}
