import React from 'react'
import styles from './botao.module.scss'

export default function Botao({children}) {
  return (
    <button className={styles.botao}>{children}</button>
  )
}
