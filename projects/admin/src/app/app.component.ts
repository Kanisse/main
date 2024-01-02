import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'admin';
  description="c'est une application angular";
  nbr=0;
  DataPerson= { "nom":'', "prenom":'',"age":0};
  showForm=false;
  personnes= [
    {"nom":"Dupont","prenom":"Jean", "age":34},
    {"nom":"Dupert","prenom":"Mike", "age":30},
    {"nom":"Duport","prenom":"Jhon", "age":36}
  ];

  toggletable(){
    this.showForm=true;
  }
  titlechange(){
    this.title="Programmeur";
  }
  Add(item:any):void{
    this.personnes.push(item);
    this.showForm=false;
  }
  On(){
    this.nbr++;
  }
  getall(){
    this.personnes;
  }
delete(id:number){
  this.personnes.filter(item => item.id !==id);
}
update(id:number, Newitem:any){
  const index = this.personnes.findIndex(item => item.id == id)
  this.personnes[index]= Newitem;
}

  ngOnInit(): void {
     this.personnes;
  }

}
