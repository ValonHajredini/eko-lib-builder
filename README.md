
<a href="#">
    <h1 align="center">EkoRatingInput</h1>
</a>









## Getting Started

EkoRatingInput contains the rating input in stars design, to work is required to have Fontawsome library. 


## Installation instructions
##### Method 1
Install `eko-checkbox` from `npm`:
```bash
npm install eko-checkbox --save
```

Add needed package to NgModule imports:
```js
import { EkoCheckboxModule } from 'eko-checkbox';

@NgModule({
  ...
  imports: [
  ...,
  EkoCheckboxModule,
  ...
  ]
  ...
})
```
To app.component.ts create the func tion to get data from eko-checkbox checkbox
```js
export class AppComponent {
...
checkboxData(e) {
    console.log(e);
  }
...
}
```
To  app.component.html add :
```html
<eko-checkbox
  [fontSize]="'22px'"
  [color]="'#fff'"
  [value]="true"
  [name]="'myCheckbox'"
  (data)="checkboxData($event)"
>Check box</eko-checkbox>
```
if you provide the name `[name]="'anyName'"` the return data will be: 
```js
{name: 'anyName', value: true} 
```
or
```js
{name: 'anyName', value: false} 
```
if you do not provide a name like: 
```html
<eko-checkbox
  [fontSize]="'22px'"
  [color]="'#fff'"
  [value]="true"
  (data)="checkboxData($event)"
>Check box</eko-checkbox>
```
the return value will be: 
```js
true 
```
or
```js
false
```
