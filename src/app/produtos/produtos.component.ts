import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: any = [{descricao:"teste 1"},{descricao:"teste 2"}]

  constructor() { }

  ngOnInit(): void {
  }

  edit(produto: any) {

  }

  delete(produto: any) {
    
  }

}
