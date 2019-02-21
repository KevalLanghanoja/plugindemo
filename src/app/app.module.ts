import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Brightness } from '@ionic-native/brightness/ngx';
import { Instagram } from '@ionic-native/instagram/ngx';
import { SMS } from '@ionic-native/sms/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Flashlight,
    Brightness,
    Hotspot,
    Instagram,SMS,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
