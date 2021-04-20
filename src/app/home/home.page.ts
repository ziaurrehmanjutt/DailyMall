import { Component } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private sanitizer: DomSanitizer) {
    this.openUrl();
  }

  async openUrl(){
    console.log('Opening');
    await Browser.open({ url: 'https://www.dailymall.id' });
  }
  // openURL(){
  //   return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.dailymall.id/");
  //   return "https://www.dailymall.id/";
  // }
}
