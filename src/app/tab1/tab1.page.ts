import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

// REFER: https://ionicframework.com/docs/v6/native/camera
// npm install @capacitor/camera
// npx cap sync
// npm run build
// DO NOT FORGET TO INSTALL AND SETUP FOR PWA
// npm install @ionic/pwa-elements
// refer the setup in main.ts
// https://capacitorjs.com/docs/web/pwa-elements

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  imgSource: any;

  constructor() {}

  async handleTakePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    this.imgSource = image.webPath;

    // Can be set to the src of an image now
    // imageElement.src = imageUrl;
  }
}
