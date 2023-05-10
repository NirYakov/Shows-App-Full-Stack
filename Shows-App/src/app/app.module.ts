import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CardShowComponent } from './cards/cardShow/cardShow.component';
import { CardsListComponent } from './cards/cards-list/cards-list.component';
import { ShowsGameHighlowComponent } from './shows-game/shows-game-highlow/shows-game-highlow.component';
import { SingleShowComponent } from './cards/single-show/single-show.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardShowComponent,
    CardsListComponent,
    ShowsGameHighlowComponent,
    SingleShowComponent,
    CarouselComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatToolbarModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
