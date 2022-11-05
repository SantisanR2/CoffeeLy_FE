import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { StorageService } from 'src/app/core/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-empresa',
  templateUrl: './inicio-empresa.component.html',
  styleUrls: ['./inicio-empresa.component.scss']
})
export class InicioEmpresaComponent implements OnInit {
  public detailLogoPath = '../../assets/detailLogo.png';
  public editLogoPath = '../../assets/editLogo.png';
  public deleteLogoPath = '../../assets/deleteLogo.png';
  public imgPath = '../../assets/puntosOpciones.png';
  
  public respuesta:any;

  constructor(private RestService:RestService,  private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    const vistaLotes = '/lote/All';
    this.cargarlotes(vistaLotes);
  }

  cargarlotes(ruta:string)
  {
    this.RestService.get(ruta)
    .subscribe(respuesta => {
      this.respuesta = respuesta;
    } )
  }

  detail(id:string)
  {
    this.storageService.setStorageItem({key: "lote", value: id, storageArea: "localStorage" });
    this.router.navigate(['inicio/finca']).then(this.refresh);  
  }

  edit(id:string)
  {
    this.storageService.setStorageItem({key: "lote", value: id, storageArea: "localStorage" });
    this.router.navigate(['inicio/finca']).then(this.refresh);  
  }

  delete(id:string)
  {
    this.storageService.setStorageItem({key: "lote", value: id, storageArea: "localStorage" });
    this.router.navigate(['inicio/finca']).then(this.refresh);  
  }

  refresh() {
    window.location.reload();
  }

}
