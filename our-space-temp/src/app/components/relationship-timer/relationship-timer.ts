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

  now = new Date();

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  private interval: any;

  ngOnInit() {
    this.update();
    this.interval = setInterval(() => this.update(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  update() {
    this.now = new Date();

    const diff = this.now.getTime() - this.startDate.getTime();

    this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    this.minutes = Math.floor((diff / (1000 * 60)) % 60);
    this.seconds = Math.floor((diff / 1000) % 60);
  }
}