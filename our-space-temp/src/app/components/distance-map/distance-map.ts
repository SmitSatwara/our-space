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

  private rafId: number = 0;
  private sendT = 0;
  private recvT = 0.5;

  ngOnInit() { this.loop(); }
  ngOnDestroy() { cancelAnimationFrame(this.rafId); }

  private loop() {
    this.updateClocks();
    this.updateHearts();
    this.rafId = requestAnimationFrame(() => this.loop());
  }

  private updateClocks() {
    const now = new Date();
    const fmt = (tz: string) =>
      new Intl.DateTimeFormat('en-US', {
        hour: '2-digit', minute: '2-digit', hour12: true, timeZone: tz
      }).format(now).toLowerCase();
    const a = document.getElementById('ahm-time');
    const t = document.getElementById('tor-time');
    if (a) a.textContent = fmt('Asia/Kolkata');
    if (t) t.textContent = fmt('America/Toronto');
  }

  private qbez(x0: number, y0: number, cx: number, cy: number, x1: number, y1: number, t: number) {
    const m = 1 - t;
    return { x: m*m*x0 + 2*m*t*cx + t*t*x1, y: m*m*y0 + 2*m*t*cy + t*t*y1 };
  }

  private updateHearts() {
    this.sendT = (this.sendT + 0.003) % 1;
    this.recvT = (this.recvT + 0.003) % 1;
    const sp = this.qbez(316, 88, 215, 18, 110, 73, this.sendT);
    const rp = this.qbez(112, 80, 215, 158, 314, 96, this.recvT);
    const hs = document.getElementById('heart-send');
    const hr = document.getElementById('heart-recv');
    if (hs) { hs.setAttribute('x', String(sp.x)); hs.setAttribute('y', String(sp.y)); }
    if (hr) { hr.setAttribute('x', String(rp.x)); hr.setAttribute('y', String(rp.y)); }
  }
}