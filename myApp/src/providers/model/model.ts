import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';




export class Sunrise {
  fade=30;
  hold=10;
  blink=5;
  scheme=0;
  previewing=false;
}


export const days=["mon","tue","wed","thur","fri","sat","sun"];

export class Alarm {
  days=
    [{time:"07:45",on:true},
    {time:"07:45",on:true},
    {time:"07:45",on:true},
    {time:"07:45",on:true},
    {time:"07:45",on:true},
    {time:"10:45",on:true},
    {time:"12:00",on:false}]

  off=false

};

export class State {
  sunrise=new Sunrise();
  alarm=new Alarm();
  ledson=true;
  alarming=true;
}

@Injectable()
export class ModelProvider {

  state=new State();
  subject=new BehaviorSubject<State>(this.state)

  constructor(public http: HttpClient) {
    console.log('Hello ModelProvider Provider');
  }


  updated(state) {
    Object.assign(this.state,state);
    console.log(JSON.stringify(this.state,null,2));
    this.subject.next(this.state);
  }
}
