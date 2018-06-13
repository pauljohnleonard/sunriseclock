import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModelProvider } from '../../providers/model/model';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  state;

  constructor(public navCtrl: NavController, public navParams: NavParams,public model: ModelProvider) {
    
    model.subject.subscribe((state) => {
      this.state = state;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  display(yes) {
    this.state.ledson=yes;
    this.model.updated(this.state)
  }

  alarmoff() {
    this.state.alarming=false;
    this.model.updated(this.state)
  }
}
