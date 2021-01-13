import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  numero1: number = 0
  numero2: number = 0
  letras: string[] = ["a", "b", "c"]

  constructor() { }

  ngOnInit(): void {
  }
  usuarios = [{nombre:"Manolo", apellido:"Lopez"},
  {nombre:"Raul", apellido:"Salazar"},
  {nombre:"Jorge", apellido:"Casas"}]

  usu = {nombre:"",apellido:""}
  
  mostrarUsuario(usuario) {
    this.usu = usuario
  }
}
