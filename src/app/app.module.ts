import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { WhoAreComponent } from './who-are/who-are.component';
import { CardComponent } from './card/card.component';
import { BannerBlockComponent } from './banner-block/banner-block.component';
import { TitleComponent } from './title/title.component';
import { StockComponent } from './stock/stock.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    WhoAreComponent,
    CardComponent,
    BannerBlockComponent,
    TitleComponent,
    StockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
