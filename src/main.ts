import 'core-js/client/shim';
import 'zone.js/dist/zone';

import './index.scss';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);





