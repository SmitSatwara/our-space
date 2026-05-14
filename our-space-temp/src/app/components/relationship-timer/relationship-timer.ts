import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-relationship-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relationship-timer.html',
  styleUrl: './relationship-timer.scss'
})
export class RelationshipTimer implements OnInit, OnDestroy {

  startDate = new Date('2023-11-14T00:00:00');

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  tickFlash = false;

  private interval: any;
  private flashTimeout: any;

  ngOnInit() {
    this.update();
    this.interval = setInterval(() => this.update(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
    clearTimeout(this.flashTimeout);
  }

  update() {
    const diff = new Date().getTime() - this.startDate.getTime();
    this.days    = Math.floor(diff / 86400000);
    this.hours   = Math.floor((diff % 86400000) / 3600000);
    this.minutes = Math.floor((diff % 3600000) / 60000);
    this.seconds = Math.floor((diff % 60000) / 1000);

    this.tickFlash = true;
    this.flashTimeout = setTimeout(() => this.tickFlash = false, 150);
  }

  pad(n: number): string {
    return String(n).padStart(2, '0');
  }
}