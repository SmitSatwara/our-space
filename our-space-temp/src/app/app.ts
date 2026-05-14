import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { RelationshipTimer } from "./components/relationship-timer/relationship-timer";
import { DistanceMap } from "./components/distance-map/distance-map";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Hero, RelationshipTimer, DistanceMap],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}