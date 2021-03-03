import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receita } from 'src/app/shared/model/receita.model';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  receitasUrl = 'http://localhost:8080/receitas';

  constructor(private http: HttpClient) { }

  create(receita: Receita): any {
    return this.http.post(this.receitasUrl, receita);
  }
}
