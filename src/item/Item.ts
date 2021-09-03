export abstract class Item {
  readonly nome: string;
  readonly marca: string;
  readonly preco: number;

  constructor(nome: string, marca: string, preco: number) {
    this.nome = nome;
    this.marca = marca;
    this.preco = preco;
  }
}
