import { ImpostoItem } from './impostoItem';

export class Cigarro extends ImpostoItem {
  constructor(marca: string, preco: number) {
    super('Cigarro', marca, preco);
  }

  imposto() {
    return 10;
  }
}
