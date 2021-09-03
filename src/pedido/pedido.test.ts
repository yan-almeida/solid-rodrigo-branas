import { FinalizarPedidoMensagemFile } from '../finalizar-pedido-mensagem';
import { Agua } from '../item/agua';
import { Cerveja } from '../item/cerveja';
import { Cigarro } from '../item/cigarro';
import { Pedido } from './pedido';

test('Deve criar um pedido e calcular o total', () => {
  // dado que (given)
  const pedido = new Pedido(new FinalizarPedidoMensagemFile());
  pedido.adicionarItem(new Cerveja('Brahma', 10));
  pedido.adicionarItem(new Cigarro('Sousa Cruz', 10));
  pedido.adicionarItem(new Agua('Cristal', 1));

  //  quando (when)
  const total = pedido.total();

  //  espero (then)
  expect(total).toBe(23);
});

test('Deve criar um pedido e calcular os impostos', () => {
  // dado que (given)
  const pedido = new Pedido(new FinalizarPedidoMensagemFile());
  pedido.adicionarItem(new Agua('Cristal', 1)); // isenta
  pedido.adicionarItem(new Cerveja('Brahma', 10)); // 10%
  pedido.adicionarItem(new Cigarro('Sousa Cruz', 8)); // 7%

  //  quando (when)
  const imposto = pedido.impostos();

  //  espero (then)
  expect(imposto).toBe(1.8);
});

// possibilidade de testar implementação em outros idiomas
test('Deve criar um pedido e imprimir mensagem em ptBr', async () => {
  // dado que (given)
  const pedido = new Pedido(new FinalizarPedidoMensagemFile());
  pedido.adicionarItem(new Agua('Cristal', 1)); // isenta
  pedido.adicionarItem(new Cerveja('Brahma', 10)); // 10%
  pedido.adicionarItem(new Cigarro('Sousa Cruz', 8)); // 10%

  //  quando (when)
  const message = await pedido.finalizarPedido('ptBr');

  //  espero (then)
  expect(message).toBe(
    'Total: R$ 20.8 (Imposto adicionados: R$ 1.8). Obrigado por comprar em nosso estabelecimento!',
  );
});
