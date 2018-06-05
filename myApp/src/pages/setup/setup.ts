import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs/operators/timeout';

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

    ssid: string;
    password: string;

    constructor(public navCtrl: NavController, public http: HttpClient) {
        //  http.get("http://255.255.255.255/?ssid=vigin-2G&password=slugsarenice", { responseType: 'text' }).subscribe((res) => {
        //     console.log(res);
        // })
    }


    setup() {
        console.log(" TALKING TO sunrise setup")
        const url = "http://192.168.4.1/?ssid=" + this.ssid + "&password=" + this.password;
        this.http.get(url, { responseType: 'text' }).pipe(timeout(1000)).subscribe(
            (res) => {
                console.log(res);
            },
            (err) => {
                console.log(err);
            })
    }

}


// return Observable.from(new Promise((resolve, reject) => {
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     this.http.post(this.url + '/api/', JSON.stringify(credentials), { headers: headers }).timeout(15000)
//       .subscribe(res => {
//         let data = res.json();
//         resolve(data);
//       }, (err) => {
//         reject(err);
//       });
//   }))