import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProdutosService } from './produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: any = [{descricao:"teste 1"},{descricao:"teste 2"}]
  msgErro: any
  isError = false
  produto: any = {}

  constructor(
    private produtosService: ProdutosService
  ) { }

  ngOnInit(): void {
  }

  edit(produto: any) {
    //TODO
  }

  delete(produto: any) {
    //TODO
  }
  
  save(form: NgForm) {
    if (!this.produto.isEdit) {
      this.produtos.push({descricao: this.produto.descricao})
      this.cleanForm(form);
    } else {
      this.cleanForm(form);
    }
  }

  cleanForm(form: NgForm) {
    form.resetForm();
    this.isError = false;
    this.produto = {} as any;
  }

}
