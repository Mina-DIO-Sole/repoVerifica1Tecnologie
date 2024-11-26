// app.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Mante } from './mante.model';  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client-angular';  
  products: Mante[] = [];  

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  fetchData() {
    this.http.get<{ mante: Mante[] }>('http://localhost:3000/api/mante')  
      .subscribe({
        next: (response) => {
          this.products = response.mante;  
          console.log('Dati ricevuti:', this.products);  
        },
        error: (error) => {
          console.error('Errore nel recupero dei dati:', error);  
        }
      });
  }
}


