import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibsComponent } from './libs/libs.component';
// import {EkoRatingInputModule} from '../../projects/eko-rating-input/src/lib/eko-rating-input.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {EkoRatingInputModule} from 'eko-rating-input';
@NgModule({
  declarations: [
    AppComponent,
    LibsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    EkoRatingInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
