// pages/api/editoras/[codEditora].ts
import { NextApiRequest, NextApiResponse } from 'next'
import { ControleEditora } from '../../../classes/controle/ControleEditora'

const controleEditora = new ControleEditora()

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const codEditora = Number(req.query.codEditora)
      const nomeEditora = controleEditora.getNomeEditora(codEditora)
      if (nomeEditora) {
        res.status(200).json({ nome: nomeEditora })
      } else {
        res.status(404).end() // Editora não encontrada
      }
    } else {
      res.status(405).end() // Método não permitido
    }
  } catch (e) {
    res.status(500).end() // Exceção ocorrida no servidor
  }
}