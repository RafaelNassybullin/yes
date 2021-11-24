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
import { MitchelComponent } from './mitchel/mitchel.component';
import { WordsComponent } from './words/words.component';
import { FooterComponent } from './footer/footer.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

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
    MitchelComponent,
    WordsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
