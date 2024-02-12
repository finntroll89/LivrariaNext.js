import React, { useState, useEffect } from 'react';
import styles from '../app/globals.css';
import { Menu } from '../componentes/Menu';
import RodaPe from '../componentes/RodaPe';

const baseURL = "http://localhost:3000/api/livros";

const obter = async () => {
  const response = await fetch(baseURL);
  return response.json();
};

const excluirLivro = async (codigo) => {
  const response = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
  return response.ok;
};

const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    if (!carregado) {
      obter().then(data => {
        setLivros(data);
        setCarregado(true);
      });
    }
  }, [carregado]);

  const excluir = async (codigo) => {
    const sucesso = await excluirLivro(codigo);
    if (sucesso) {
      setCarregado(false);
    }
  };

  return (
    <div className={styles.container}>
      <Menu />
      <main>
        <h1>Livros</h1>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Título</th>
              <th>Resumo</th>
              <th>Autor</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {livros.map(livro => (
              <tr key={livro.codigo}>
                <td>{livro.codigo}</td>
                <td>{livro.titulo}</td>
                <td>{livro.resumo}</td>
                <td>{livro.autores.join(', ')}</td>
                <td>
                  <button onClick={() => excluir(livro.codigo)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
