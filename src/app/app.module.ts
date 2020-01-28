import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component'
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component'
import { Home1Component } from './home1/home1.component'
import { Home2Component } from './home2/home2.component'
import { Home3Component } from './home3/home3.component'
import { Home4Component } from './home4/home4.component'
import { Home5Component } from './home5/home5.component'
import { Home6Component } from './home6/home6.component'
import { NgScrollbarModule } from 'ngx-scrollbar';
import { StickyNavModule } from 'ng2-sticky-nav';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports:      [ 
    BrowserModule,
   FormsModule,
  FlexLayoutModule,
   MaterialModule,
   BrowserAnimationsModule,
   RoutingModule,
   NgScrollbarModule,
   StickyNavModule,
       AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    })
  ],
   
  declarations: [
     AppComponent,
     HomeComponent,
     HeaderComponent,
     FooterComponent,
     CardComponent,
     Home1Component,
     Home2Component,
    Home3Component,
    Home4Component,
    Home5Component,
    Home6Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
