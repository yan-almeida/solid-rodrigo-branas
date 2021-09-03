import { ImpostoItem } from './impostoItem';

export class Cerveja extends ImpostoItem {
  constructor(marca: string, preco: number) {
    super('Cerveja', marca, preco);
  }

  imposto() {
    return 10;
  }
}
