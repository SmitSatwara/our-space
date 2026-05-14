import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-distance-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './distance-map.html',
  styleUrl: './distance-map.scss'
})
export class DistanceMap implements OnInit {

  mehsana = { x: 180, y: 220 };
  toronto = { x: 820, y: 140 };

  distanceKm = 0;

  // simple timezone labels
  indiaTime = 'IST +5:30';
  canadaTime = 'EST -5:00';

  ngOnInit() {
    this.distanceKm = this.haversine(
      23.5880, 72.3693,
      43.6532, -79.3832
    );
  }

  haversine(lat1:number, lon1:number, lat2:number, lon2:number) {
    const R = 6371;
    const dLat = this.rad(lat2 - lat1);
    const dLon = this.rad(lon2 - lon1);

    const a =
      Math.sin(dLat/2)**2 +
      Math.cos(this.rad(lat1)) *
      Math.cos(this.rad(lat2)) *
      Math.sin(dLon/2)**2;

    return Math.round(2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)));
  }

  rad(v:number) {
    return v * Math.PI / 180;
  }
}