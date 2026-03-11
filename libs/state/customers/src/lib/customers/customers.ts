import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-customers',
  imports: [],
  templateUrl: './customers.html',
  styleUrl: './customers.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Customers {}
