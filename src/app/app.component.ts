import { Component } from '@angular/core';
// import { Platform } from '@ionic/angular';
// import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    // public platform: Platform,
    // private screenOrientation: ScreenOrientation,
  ) {
    // this.initializeApp();
  }

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     this.screenOrientation
  //     .lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  //     });
  // }
}
