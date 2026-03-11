import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-api-client',
  imports: [],
  templateUrl: './api-client.html',
  styleUrl: './api-client.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiClient {}
