import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-distance-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './distance-map.html',
  styleUrl: './distance-map.scss'
})
export class DistanceMap implements OnInit, OnDestroy {

  distanceKm = 11357;
  indiaTime = '';
  canadaTime = '';

  private interval: any;

  ngOnInit() {
    this.updateClocks();
    this.interval = setInterval(() => this.updateClocks(), 10000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  updateClocks() {
    const now = new Date();
    this.indiaTime  = this.formatTime(now, 5.5);
    this.canadaTime = this.formatTime(now, -4);
  }

  formatTime(date: Date, offsetHours: number): string {
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    const local = new Date(utc + offsetHours * 3600000);
    const h = local.getHours();
    const m = String(local.getMinutes()).padStart(2, '0');
    const ampm = h >= 12 ? 'pm' : 'am';
    const h12 = h % 12 || 12;
    return `${h12}:${m} ${ampm}`;
  }
}