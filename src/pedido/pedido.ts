import { FinalizarPedidoMensagem } from '../finalizar-pedido-mensagem/interfaces/finalizar-pedido-mensagem.interface';
import { ImpostoItem } from '../item/impostoItem';
import { Item } from '../item/Item';

type Idioma = 'ptBr' | 'en';

export class Pedido {
  private readonly items: Array<Item | ImpostoItem>;
  private readonly finalizarPedidoMensagem: FinalizarPedidoMensagem;

  constructor(finalizarPedidoMensagem: FinalizarPedidoMensagem) {
    this.items = [];

    this.finalizarPedidoMensagem = finalizarPedidoMensagem;
  }

  adicionarItem(item: Item) {
    this.items.push(item);
  }

  total() {
    let total = 0 + this.impostos();

    for (const item of this.items) {
      total += item.preco;
    }

    return total;
  }

  impostos() {
    let impostos = 0;

    for (const item of this.items) {
      if (item instanceof ImpostoItem) {
        impostos += item.calcularImposto();
      }
    }

    return impostos;
  }

  async finalizarPedido(idioma: Idioma) {
    const messagem = await this.finalizarPedidoMensagem.read(idioma);

    return messagem
      .replace('{total}', this.total() + '')
      .replace('{impostos}', this.impostos() + '');
  }
}
