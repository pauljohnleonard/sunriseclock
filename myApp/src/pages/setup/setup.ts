import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ModelProvider, State } from '../../providers/model/model';
// import { timeout } from 'rxjs/operators/timeout';

/**
 * Generated class for the SetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
    selector: 'page-setup',
    templateUrl: 'setup.html',
})
export class SetupPage {


   
    state:State
   
    options = [{ val: 0, disp: "Simple" },
    { val: 1, disp: "Rainbow" },
    { val: 2, disp: "Psycho" }]


    constructor(public navCtrl: NavController, public http: HttpClient,public model:ModelProvider) {
        model.subject.subscribe((state) => {
            this.state=state;
        });
    }



    preview(yes) {
        this.state.sunrise.previewing=yes
        this.model.updated(this.state);
    }

    update(evt) {
     //   console.log(JSON.stringify(evt,null,2));
     //   console.log(JSON.stringify(this.state.sunrise,null,2));
        this.model.updated(this.state);
    }

}


