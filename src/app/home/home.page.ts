import { Component } from '@angular/core';
// import { DomSanitizer} from '@angular/platform-browser';
// import {  Plugins } from '@capacitor/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
// const { Browser } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    // private sanitizer: DomSanitizer
    private iab: InAppBrowser
    ) {
    // this.openUrl();
    const browser = this.iab.create('https://www.dailymall.id/','_blank', 'location=no');
  }

  async openUrl(){
    console.log('Opening');
   // await Browser.open({ url: 'https://www.dailymall.id/' , windowName: '_self' , presentationStyle : 'fullscreen'});
  }
  // openURL(){
  //   return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.dailymall.id/");
  //   return "https://www.dailymall.id/";
  // }
}
