import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModelProvider, State, days } from '../../providers/model/model';

@Component({
  selector: 'page-alarm',
  templateUrl: 'alarm.html'
})
export class AlarmPage {


  days=days;

  state: State;

  constructor(public navCtrl: NavController, public model: ModelProvider) {
    
    model.subject.subscribe((state) => {
      this.state = state;
    });

  }

  update() {
    this.model.updated(this.state);
  }


}
