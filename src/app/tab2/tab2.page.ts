import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  latitude: any;
  longitude: any;

  constructor() {}

  async handleLocateMe() {
    const coordinates = await Geolocation.getCurrentPosition();

    console.log('Current position:', coordinates);
    this.latitude = coordinates?.coords?.latitude;
    this.longitude = coordinates?.coords?.longitude;
  }

}

