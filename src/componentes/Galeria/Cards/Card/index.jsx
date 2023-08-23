import React from "react";
import open from './open.png';
import favorito from './favorito.png'

export default function Card({ item, styles}) {
  return (
    <li key={item.id} className={styles.galeria__card}>
      <img
        className={styles.galeria__imagem}
        src={item.imagem}
        alt={item.titulo}
      />
      <p className={styles.galeria__descricao}>{item.titulo}</p>
      <div>
        <p>{item.creditos}</p>
        <span>
          <img src={favorito} alt="ícone de abrir modal" />
          <img src={open} alt="ícone coração de curtir" />
        </span>
      </div>
    </li>
  );
}
