import { ConfigProvider } from '../../providers/config/config';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NetworkInterface } from '@ionic-native/network-interface';

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {

    wifiIP: string;
    carrierIP: string;
    constructor(public navCtrl: NavController, networkInterface: NetworkInterface) {
        console.log('Hello ConfigProvider Provider');

        networkInterface.getWiFiIPAddress().then((ip) => {
            this.wifiIP = JSON.stringify(ip, null, 2)
        });


        // networkInterface.getCarrierIPAddress().then((ip) => {
        //     this.carrierIP = ip
        // });
    }





}
