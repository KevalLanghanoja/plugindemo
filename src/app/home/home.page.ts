import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Brightness } from '@ionic-native/brightness/ngx';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';
import { Instagram } from '@ionic-native/instagram/ngx';
import { SMS } from '@ionic-native/sms/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private flashlight: Flashlight,private brightness: Brightness,private hotspot: Hotspot,private instagram: Instagram,private sms: SMS) {
   
   }
   flash1()
   {
     this.flashlight.switchOn();
     alert("Flashlight is on");
   }
   flash2()
   {
     this.flashlight.switchOff();
   }
   ht()
   {
    this.hotspot.scanWifi().then((networks: HotspotNetwork[]) => {
      console.log(networks);
      alert("Hotspot is on ")
  });
   }
   insta()
   {
    this.instagram.share('data:image/png;uhduhf3hfif33', 'Caption')
    .then(() => console.log('Shared!'))
    .catch((error: any) => console.error(error));
   }
   message()
   {
    alert("Hello");
    this.sms.send('8153907578', 'Hii Bhavin How are you');
   }
   
}
