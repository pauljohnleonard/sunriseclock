import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NetworkInterface } from '@ionic-native/network-interface';


/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  wifiIP:string;

  constructor(public http: HttpClient, networkInterface:NetworkInterface ) {
    console.log('Hello ConfigProvider Provider');

    networkInterface.getWiFiIPAddress().then( (ip)=> { 
        this.wifiIP=ip });
  }

}
