import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './core';

/* Import css, ect... */

import './core/style/styles.css';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, []);