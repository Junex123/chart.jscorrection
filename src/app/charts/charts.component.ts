import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent implements OnInit {
  chartInstance: Chart | null = null;

  constructor() {}

  ngOnInit(): void {
    const chartCanvas = document.getElementById('chart') as HTMLCanvasElement;
    if (chartCanvas) {
      const ctx = chartCanvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 450);
        gradient.addColorStop(0, 'rgba(0, 199, 214, 0.32)');
        gradient.addColorStop(0.3, 'rgba(0, 199, 214, 0.1)');
        gradient.addColorStop(1, 'rgba(0, 199, 214, 0)');
        
        const data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [{
            label: 'Applications',
            backgroundColor: gradient,
            pointBackgroundColor: '#00c7d6',
            borderWidth: 1,
            borderColor: '#0e1a2f',
            data: [60, 45, 80, 30, 35, 55, 25, 80, 40, 50, 80, 50]
          }]
        };
        
        const options = {
          responsive: true,
          maintainAspectRatio: true,
          animation: {
            easing: 'easeInOutQuad',
            duration: 520
          },
          scales: {
            yAxes: [{
              ticks: {
                fontColor: '#5e6a81'
              },
              gridLines: {
                color: 'rgba(200, 200, 200, 0.08)',
                lineWidth: 1
              }
            }],
            xAxes: [{
              ticks: {
                fontColor: '#5e6a81'
              }
            }]
          },
          elements: {
            line: {
              tension: 0.4
            }
          },
          legend: {
            display: false
          },
          point: {
            backgroundColor: '#00c7d6'
          },
          tooltips: {
            titleFontFamily: 'Poppins',
            backgroundColor: 'rgba(0,0,0,0.4)',
            titleFontColor: 'white',
            caretSize: 5,
            cornerRadius: 2,
            xPadding: 10,
            yPadding: 10
          }
        };
        
        this.chartInstance = new Chart(ctx, {
          type: 'line',
          data: data,
          options: options
        });
      }
    }
  }
}