// Menu.tsx
import Link from 'next/link';
import React from 'react';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
          <div className="navbar-brand">Home</div>
        </Link>
        <Link href="/LivroLista">
          <div className="nav-link">Livro Lista</div>
        </Link>
        <Link href="/LivroDados">
          <div className="nav-link">Livro Dados</div>
        </Link>
      </div>
    </nav>
  );
};
