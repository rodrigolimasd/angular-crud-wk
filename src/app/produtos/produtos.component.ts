import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProdutosService } from './produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: any = []
  msgErro: any
  isError = false
  produto: any = {}

  constructor(
    private produtosService: ProdutosService
  ) { }

  ngOnInit(): void {
    this.getProdutos()
  }

  getProdutos(){
    this.produtosService.getProdutos()
        .subscribe({
          next: this.handleGetProdutos.bind(this),
          error: this.handlerErro.bind(this)
        })
  }

  handleGetProdutos(result: any) {
    this.produtos = result
  }

  edit(produto: any) {
    //TODO
  }

  delete(produto: any) {
    //TODO
  }
  
  save(form: NgForm) {
    if (!this.produto.isEdit) {
      this.produtosService.save(this.produto)
        .subscribe({
          next: () => this.cleanForm(form),
          error: this.handlerErro.bind(this)
        })
    } else {
      this.produtosService.update(this.produto)
        .subscribe({
          next: () => this.cleanForm(form),
          error: this.handlerErro.bind(this)
        })
    }
  }

  cleanForm(form: NgForm) {
    this.getProdutos()
    form.resetForm();
    this.isError = false;
    this.produto = {} as any;
  }

  handlerErro(msgErro: any) {
    this.msgErro = msgErro;
    this.isError = true;
  }

}
