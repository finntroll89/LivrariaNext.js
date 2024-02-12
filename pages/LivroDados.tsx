import React, { useState, useEffect } from 'react';
import '../app/globals.css';
import { useRouter } from 'next/router';
import { Menu } from '../componentes/Menu';
import { ControleEditora } from '../classes/controle/ControleEditora';

const baseURL = "http://localhost:3000/api/livros";

const incluirLivro = async (livro) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(livro)
  });
  return response.ok;
};

const LivroDados: React.FC = () => {
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(0);
  const [editoras, setEditoras] = useState([]);
  const router = useRouter();

  const controleEditora = new ControleEditora();

  useEffect(() => {
    setEditoras(controleEditora.getEditoras());
  }, []);

  const tratarCombo = (evento: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(evento.target.value));
  };

  const incluir = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora
    };
    const sucesso = await incluirLivro(livro);
    if (sucesso) {
      router.push('/LivroLista');
    }
  };

  return (
    <div className="container">
      <Menu />
      <main>
        <h1>Incluir Livro</h1>
        <form onSubmit={incluir}>
          <label>
            Título:
            <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} />
          </label>
          <label>
            Resumo:
            <textarea value={resumo} onChange={e => setResumo(e.target.value)} />
          </label>
          <label>
            Autores:
            <textarea value={autores} onChange={e => setAutores(e.target.value)} />
          </label>
          <label>
            Editora:
            <select value={codEditora} onChange={tratarCombo}>
              {editoras.map(editora => (
                <option key={editora.codEditora} value={editora.codEditora}>
                  {editora.nome}
                </option>
              ))}
            </select>
          </label>
          <button type="submit">Incluir</button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
