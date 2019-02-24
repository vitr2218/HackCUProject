import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

firebase.initializeApp(environment.firebase);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
