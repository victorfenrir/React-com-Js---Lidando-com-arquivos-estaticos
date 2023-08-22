import React from 'react'
import banner from '../../assets/banner.png'
import style from './banner.module.scss'

export default function Banner() {
  return (
    <div className={style.banner}>
        <h1>A galeria mais completa do espaço!</h1>
        <img src={banner} alt='Imagem da Terra vista do espaço'/>
    </div>
  )
}
