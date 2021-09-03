import { Item } from "../Item/Item"
import { Pedido } from "./pedido"


test('Deve criar um pedido',()=>{
  // dado que (given)
const pedido = new Pedido()
pedido.adicionarItem(new Item('Cerveja', "Brahma",10))
pedido.adicionarItem(new Item('Cigarro', "Sousa Cruz",8))
pedido.adicionarItem(new Item('Water', "Cristal",1))

  //  quando (when)
const total = pedido.total()

  //  espero (then)
  expect(total).toBe(19)
})

