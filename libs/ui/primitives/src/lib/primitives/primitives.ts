import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-primitives',
  imports: [],
  templateUrl: './primitives.html',
  styleUrl: './primitives.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Primitives {}
