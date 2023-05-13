import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  web: boolean = false;
  movil: boolean = false;
  desktop: boolean = false;
  name: string = '';
  nombre: string = '';
  plataforma: string='';
  descrip:string= '';
  tipo:string='';
  img: any = null;
  constructor() { }

  ngOnInit(): void {
  }
  add() : void {

  }
}

