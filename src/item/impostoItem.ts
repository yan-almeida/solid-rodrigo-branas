import { Item } from './Item';

export abstract class ImpostoItem extends Item {
  constructor(nome: string, marca: string, preco: number) {
    super(nome, marca, preco);
  }

  calcularImposto() {
    return (this.preco * this.imposto()) / 100;
  }

  abstract imposto(): number;
}
