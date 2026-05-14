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

  private readonly START = new Date('2023-11-14T00:00:00+05:30');
  private rafId: number = 0;
  private phase = 0;
  private lastSec = -1;

  ngOnInit() { this.loop(); }
  ngOnDestroy() { cancelAnimationFrame(this.rafId); }

  private loop() {
    this.updateTimer();
    this.updateHourglass();
    this.rafId = requestAnimationFrame(() => this.loop());
  }

  private pad(n: number): string {
    return String(n).padStart(2, '0');
  }

  private updateTimer() {
    const now = new Date();
    const diff = now.getTime() - this.START.getTime();
    const days = Math.floor(diff / 86400000);

    const istOffset = 5.5 * 3600000;
    const nowIST = new Date(now.getTime() + istOffset);
    const hrs  = nowIST.getUTCHours();
    const mins = nowIST.getUTCMinutes();
    const secs = nowIST.getUTCSeconds();

    const dayEl = document.getElementById('day-count');
    const hEl   = document.getElementById('t-hrs');
    const mEl   = document.getElementById('t-min');
    const sEl   = document.getElementById('t-sec');

    if (dayEl) dayEl.textContent = String(days);
    if (hEl)   hEl.textContent  = this.pad(hrs);
    if (mEl)   mEl.textContent  = this.pad(mins);
    if (sEl)   sEl.textContent  = this.pad(secs);

    // Flash seconds pink on each tick
    if (secs !== this.lastSec) {
      this.lastSec = secs;
      if (sEl) {
        sEl.classList.add('sec-flash');
        setTimeout(() => sEl!.classList.remove('sec-flash'), 350);
      }
    }
  }

  private updateHourglass() {
    this.phase = (this.phase + 0.003) % 1;
    const p = this.phase;

    // Top sand: anchored y=12, height shrinks from 38→0 as p goes 0→1
    const topH = Math.max(0, 38 * (1 - p));
    const ts = document.getElementById('top-sand');
    if (ts) {
      ts.setAttribute('y', '12');
      ts.setAttribute('height', String(topH));
    }

    // Bottom sand: fills from bottom upward
    const botH = Math.min(38, 38 * p);
    const bs = document.getElementById('bot-sand');
    if (bs) {
      bs.setAttribute('y', String(92 - botH));
      bs.setAttribute('height', String(botH));
    }

    // Drops fall through neck (y 50→54)
    const drops = [
      { id: 'drop1', offset: 0.00 },
      { id: 'drop2', offset: 0.33 },
      { id: 'drop3', offset: 0.66 },
    ];
    drops.forEach(d => {
      const el = document.getElementById(d.id);
      if (!el) return;
      const dp = (p * 8 + d.offset) % 1;
      const y = 50 + dp * 4; // falls from 50 to 54 only (through the neck)
      const opacity = dp < 0.6 ? 0.9 * (1 - dp / 0.6) : 0;
      el.setAttribute('cy', String(y));
      el.setAttribute('opacity', String(opacity));
    });
  }
}