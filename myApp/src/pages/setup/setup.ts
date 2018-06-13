import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
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

    sunrise = { fade: 30,hold:10, blink: 5, val: 2 }
    previewing:false

    options = [{ val: 0, disp: "Simple" },
    { val: 1, disp: "Rainbow" },
    { val: 2, disp: "Psycho" }]


    constructor(public navCtrl: NavController, public http: HttpClient) {

    }

    preview(yes) {
        this.previewing=yes
    }


}


