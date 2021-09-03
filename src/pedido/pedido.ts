import { Item } from "./Item"

export class Pedido {
private readonly items: Item[]

  constructor(){
this.items = []
}

adicionarItem(item:Item){
  this.items.push(item)
}

total(){
 return this.items.reduce((total, atual)=>total + atual)
}
}
