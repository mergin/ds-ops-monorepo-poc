import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-tokens',
  imports: [],
  templateUrl: './tokens.html',
  styleUrl: './tokens.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tokens {}
