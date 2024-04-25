import { Component, OnInit } from '@angular/core';
import { AlertButton, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  get closeButton(): AlertButton {
    return { text: 'Cerrar', handler: () => this.handleClose() };
  }

  get acceptButton(): AlertButton {
    return { text: 'Aceptar', handler: () => this.handleClose() };
  }

  buttons: AlertButton[] = [this.closeButton, this.acceptButton];

  items: any[] | null = null;

  constructor(
    public alertController: AlertController,
    public loadingController: LoadingController,
  ) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.items = [
        { title: 'First', category: 'First category' },
        { title: 'Second', category: 'Second category' },
        { title: 'Third', category: 'Third category' },
        { title: 'Fourth', category: 'Fourth category' },
      ]
    }, 3000)
  }

  private handleClose() {
    this.alertController.dismiss();
  }

  // Alert component using AlertController service from Ionic
  mostrarAlerta() {
    this.alertController.create({
      header: "Título",
      subHeader: "Subtítulo",
      message: "Mensaje",
      buttons: this.buttons,
    })
    .then((alert) => alert.present());
  }

  // Loading component using LoadingController service from Ionic
  mostrarLoading() {
    this.loadingController.create({
      message: 'Cargando datos...',
      // duration: 3000,
      spinner: 'dots'    
    })
    .then(loading => {
      loading.present();
    });

    // Handle when you get the data, send the dismiss to cancel the loading event.
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 3000);
  }
}
