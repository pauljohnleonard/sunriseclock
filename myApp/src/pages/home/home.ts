import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  days=
    [{label:"mon",time:"07:45",on:true},
    {label:"tue",time:"07:45",on:true},
    {label:"wed",time:"07:45",on:true},
    {label:"thur",time:"07:45",on:true},
    {label:"fri",time:"07:45",on:true},
    {label:"sat",time:"10:45",on:true},
    {label:"sun",time:"12:00",on:false}]

  

  constructor(public navCtrl: NavController) {

  }

}
