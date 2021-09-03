import { Item } from './Item';

export class Agua extends Item {
  constructor(marca: string, preco: number) {
    super('Água', marca, preco);
  }
}
