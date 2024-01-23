// pages/api/editoras/index.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { ControleEditora } from '../../../classes/controle/ControleEditora'

const controleEditora = new ControleEditora()

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const editoras = controleEditora.getEditoras()
      res.status(200).json(editoras)
    } else {
      res.status(405).end() // Método não permitido
    }
  } catch (e) {
    res.status(500).end() // Exceção ocorrida no servidor
  }
}
