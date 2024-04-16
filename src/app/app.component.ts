import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChartsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chart.js';
}
