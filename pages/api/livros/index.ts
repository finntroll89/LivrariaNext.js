// pages/api/livros/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivro } from '../../../classes/controle/ControleLivros';
import { Livro } from '../../../classes/modelo/Livro';

export const controleLivro = new ControleLivro();

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      res.status(200).json(controleLivro.obterLivros());
      break;
    case 'POST':
      const livro: Livro = req.body;
      controleLivro.incluir(livro);
      res.status(200).json({ message: 'Livro adicionado com sucesso!' });
      break;
    default:
      res.status(405).end(); // Método não permitido
      break;
  }
}
