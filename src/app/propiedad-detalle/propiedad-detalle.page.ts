import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DetallePropiedad } from '../interfaces/interface';
import { PropiedadesService } from '../services/propiedades.service';
import { TransbankService } from '../services/transbank.service';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { ArrendarComprar, JwtPayload } from '../interfaces/interface';
import { jwtDecode } from 'jwt-decode'

@Component({
  selector: 'app-propiedad-detalle',
  templateUrl: './propiedad-detalle.page.html',
  styleUrls: ['./propiedad-detalle.page.scss'],
  providers: [ConfirmationService, MessageService]
})
export class PropiedadDetallePage implements OnInit {
  propiedadId! : string | null;

  bodyRequest : ArrendarComprar = {
    'id_usuario' : this.idUsuarioDecode(),
    'id_propiedad' : 0,
    'ultimo_estado' : 0
  }

  constructor(
    public router : Router, 
    public restApi: PropiedadesService,
    public transbankApi: TransbankService,
    public loadingController : LoadingController, 
    private route : ActivatedRoute,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.propiedadId = ''
    const id = this.route.snapshot.paramMap.get('id');
  }

  d! : DetallePropiedad;

  ngOnInit() {
    this.checkToken()
    this.propiedadId = this.route.snapshot.paramMap.get('id');
    if (this.propiedadId !== null) {
      this.getDetallePropiedad(parseInt(this.propiedadId));
    } else {
      this.router.navigate(['/propiedades'])
    }
  }

  async checkToken() {
    const token = localStorage.getItem('token')
    if (token == null) {
      this.router.navigate(['/login']);
    }
  }

  devolverToken() : string | null {
    return localStorage.getItem('token');
  }

  idUsuarioDecode() : any {
    const token = this.devolverToken();
    let id_user : number | null;
    const decoded = jwtDecode<JwtPayload>(token as string);
    id_user = decoded.id_usuario as number;
    return id_user
  }
  
  async getDetallePropiedad(id : number) {
    const loading = await this.loadingController.create({
      message : 'Buscando detalle propiedad...'
    })
    await loading.present()
    await this.restApi.devolverDetallePropiedad(id)
      .subscribe({
        next : (res) => {
          this.d = res;
          loading.dismiss()
        },
        complete : () => {},
        error : (err) => {
          console.log("Error : ", err)
          loading.dismiss()
        }
      })
  }

  comprarPropiedad(id_propiedad : any) {
    console.log(id_propiedad)
  }

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }



  arrendarPropiedad(id_propiedad : any) {
    this.confirmationService.confirm({
        message: '¿Estás seguro de que quieres arrendar la propiedad?',
        header: 'Arriendo',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel : 'Sí',
        rejectLabel : 'No',
        acceptButtonStyleClass: 'p-button-success',
        rejectButtonStyleClass: 'p-button-danger',
        accept: () => {
          this.bodyRequest.id_propiedad = id_propiedad;
          this.bodyRequest.ultimo_estado = 4;

          this.restApi.ArrendarComprarPropiedad(this.bodyRequest, localStorage.getItem('token') as string)
            .subscribe({
              next : (res) => {
                console.log(res)
              },
            });
          this.messageService.add({ severity: 'info', summary: '¡Acción realizada!', detail: 'La propiedad se ha arrendado éxitosamente.' });
        },
        reject: (type: ConfirmEventType) => {
          switch (type) {
              case ConfirmEventType.REJECT:
                  this.messageService.add({ severity: 'error', summary: '¡Rechazado!', detail: 'La propiedad no se ha arrendado.' });
                  break;
              case ConfirmEventType.CANCEL:
                  this.messageService.add({ severity: 'warn', summary: '¡Cancelado!', detail: 'Has cancelado la acción.' });
                  break;
          }
      }
    });
}
  
}
