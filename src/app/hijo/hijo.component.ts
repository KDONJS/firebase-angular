import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
    message: string = "hola mundo";

    @Input() msg: string = "";
    constructor() { }

}
