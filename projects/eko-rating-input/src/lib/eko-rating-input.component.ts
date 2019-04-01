import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'eko-RatingInput',
  templateUrl: './eko-rating-input.component.html',
  styleUrls: ['eko-rating-input.component.css']
})
export class EkoRatingInputComponent implements OnInit {

  public ratingValue = 0;
  @Input() value: number;
  @Input() fontSize = '42px';
  @Input() starColor = '#eecb4d';
  @Input() labelColor = '#999';
  @Input() rateNumber = false;
  @Output() ratingValueOutput =  new EventEmitter();
  public stars = {
    starOne:  '-o',
    starTwo:  '-o',
    starThree: '-o',
    starFour: '-o',
    starFive: '-o'
  };
  public rateNumberPrev: number;
  constructor() { }

  ngOnInit() {
    if (this.value > 0 && this.value < 6) {
      this.ratingValue = this.value;
      this.getStarsSelected(this.ratingValue);
    }
    if (this.rateNumber) {
      this.rateNumberPrev = this.ratingValue;
    }
  }
  hoverStar(starId) {
    // this.ratingValue = starId;
    this.getStarsSelected(starId);


  }
  outputValue(value) {
    this.getStarsSelected(value);
    this.ratingValue = value;
    if (this.rateNumber) {
      this.rateNumberPrev = this.ratingValue;
    }
    return this.ratingValueOutput.emit(value);
  }
  getStarsSelected(star) {
    // alert(star);

    switch ( star ) {
      case 1: {
        this.stars.starOne = '';
        this.stars.starTwo = '-o';
        this.stars.starThree = '-o';
        this.stars.starFour = '-o';
        this.stars.starFive = '-o';
        break;
      }
      case 2: {
        this.stars.starOne = '';
        this.stars.starTwo = '';
        this.stars.starThree = '-o';
        this.stars.starFour = '-o';
        this.stars.starFive = '-o';
        break;
      }
      case 3: {
        this.stars.starOne = '';
        this.stars.starTwo = '';
        this.stars.starThree = '';
        this.stars.starFour = '-o';
        this.stars.starFive = '-o';
        break;
      }
      case 4: {
        this.stars.starOne = '';
        this.stars.starTwo = '';
        this.stars.starThree = '';
        this.stars.starFour = '';
        this.stars.starFive = '-o';
        break;
      }
      case 5: {
        this.stars.starOne = '';
        this.stars.starTwo = '';
        this.stars.starThree = '';
        this.stars.starFour = '';
        this.stars.starFive = '';
        break;
      }
      default: {
        this.stars.starOne = '-o';
        this.stars.starTwo = '-o';
        this.stars.starThree = '-o';
        this.stars.starFour = '-o';
        this.stars.starFive = '-o';
        break;
      }
    }
  }
  onMouseLeav() {
    if (this.ratingValue !== 1 && this.ratingValue !== 2 && this.ratingValue !== 3 && this.ratingValue !== 4 && this.ratingValue !== 5) {
      this.getStarsSelected(this.ratingValue);
      // alert(this.ratingValue);
    }
    this.getStarsSelected(this.ratingValue);
  }
}
