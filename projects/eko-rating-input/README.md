Install `eko-rating-input` from `npm`:
```bash
npm install eko-ratin-ginput --save
```

Add needed package to NgModule imports:
```js
import { EkoRatingInputModule } from 'eko-rating-input.module';

@NgModule({
  ...
  imports: [
  ...,
  EkoRatingInputModule,
  ...
  ]
  ...
})
```
To app.component.ts create the function to get data from eko-rating-input input
```js
export class AppComponent {
...
public ratingValue: number;
...
  getRattingValue(e) {
    console.log('Rating input value: ', e);
    this.ratingValue = e;
  }
...
}
```
To  app.component.html add :
```html
<eko-RatingInput
  (ratingValueOutput)="getRattingValue($event)"
  [starColor]="'gold'"
  [labelSolor]="'#999'"
  [fontSize]="'28px'"
  [rateNumber]="true"
>Star Ratting</eko-RatingInput>
```
if you write  `[rateNumber]="false"` the star preview will not show the star number. 
