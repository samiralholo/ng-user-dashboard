import { animate, style, transition, trigger } from '@angular/animations';

export const FADE_IN = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms ease-in', style({ opacity: 1 })),
  ]),
]);
