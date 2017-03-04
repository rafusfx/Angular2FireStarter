import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule }from 'angularfire2';

//AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyDZPfEhl2Ab-IyWzic8O8dQhATTlD0l55M",
    authDomain: "imob-28877.firebaseapp.com",
    databaseURL: "https://imob-28877.firebaseio.com",
    storageBucket: "imob-28877.appspot.com",
    messagingSenderId: "588384946705"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
