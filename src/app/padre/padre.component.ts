import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  model:any = {};
  parentMessage="";

  enviar(){
    this.parentMessage = '{"nombre": '+this.model.name + ' "apellido: "' + this.model.apellido + ' "estado civil: "' + this.model.estadocivil+'}';
  }

}
