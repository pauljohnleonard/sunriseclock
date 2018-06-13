import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { AlarmPage } from '../alarm/alarm';
import { SetupPage } from '../setup/setup';
import { SetupNetPage } from '../setup-net/setup-net';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  alarmRoot = AlarmPage;
  aboutRoot = AboutPage;
  setupRoot = SetupPage;
  setupNetRoot = SetupNetPage;  
  
  constructor() {

  }
}
