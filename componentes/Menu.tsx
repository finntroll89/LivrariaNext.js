// Menu.tsx
import Link from 'next/link';
import React from 'react';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> {/* Mudamos de 'navbar-light bg-light' para 'navbar-dark bg-dark' para tornar a barra de navegação preta */}
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand text-white">Home</a> {/* Adicionamos 'text-white' para tornar o texto branco */}
        </Link>
        <Link href="/LivroLista">
          <a className="nav-link text-white">Livro Lista</a> {/* Adicionamos 'text-white' para tornar o texto branco */}
        </Link>
        <Link href="/LivroDados">
          <a className="nav-link text-white">Livro Dados</a> {/* Adicionamos 'text-white' para tornar o texto branco */}
        </Link>
      </div>
    </nav>
  );
};
