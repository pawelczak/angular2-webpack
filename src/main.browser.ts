///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../node_modules/angular2/ts/typings/jasmine/jasmine.d.ts"/>

import 'angular2/bundles/angular2-polyfills.js';
import 'rxjs/Rx';
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app/app.component";

import './assets/css/sb-admin.scss';

bootstrap(AppComponent);