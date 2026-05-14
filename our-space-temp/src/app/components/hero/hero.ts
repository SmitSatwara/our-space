import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {

  step = 1;
  noClickCount = 0;

  noTexts = ['No', 'Are you sure?', 'Think again 😤', 'Wrong answer 💔', 'Only yes allowed 😌', 'Try again ♡'];
  noReactions = ['', 'hmm... try again ♡', 'that\'s not the right answer 😤', 'i think you meant yes 💔', 'only one answer here 😌', 'you know what to click ♡'];

  get noText(): string {
    return this.noTexts[Math.min(this.noClickCount, this.noTexts.length - 1)];
  }

  get noReaction(): string {
    return this.noReactions[Math.min(this.noClickCount, this.noReactions.length - 1)];
  }

  onNoHover() {
    const btn = document.querySelector('.no-btn') as HTMLElement;
    if (btn) {
      const x = (Math.random() - 0.5) * 260;
      const y = (Math.random() - 0.5) * 160;
      btn.style.transform = `translate(${x}px, ${y}px)`;
      btn.style.transition = 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }
  }

  onNoClick() {
    this.noClickCount++;
    this.onNoHover();
  }

  onYesClick() {
    this.step = 2;
  }

  enterApp() {
    console.log('entering our space...');
  }
}