import { FinalizarPedidoMensagem } from '../finalizar-pedido-mensagem/interfaces/finalizar-pedido-mensagem.interface';
import { promises as fs } from 'fs';

export type Idioma = 'ptBr' | 'en';

export class FinalizarPedidoMensagemFile implements FinalizarPedidoMensagem {
  async read(idioma: Idioma): Promise<string> {
    return fs.readFile(
      `./src/finalizar-pedido-mensagem/mensagens/${idioma}.txt`,
      'utf-8',
    );
  }
}
