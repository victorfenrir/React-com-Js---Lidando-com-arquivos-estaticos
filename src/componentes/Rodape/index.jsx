import React from 'react'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
import styles from './rodape.module.scss'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <div className={styles.rodape__icones}>
            <a
                href='https://facebook.com/AluraCursosOnline/' 
                target='_blank' 
                rel='noreferrer'
            >
                <img src={facebook} alt='icone do facebook' />
            </a>
            <a
                href='https://twitter.com/aluraonline?lang=en' 
                target='_blank' 
                rel='noreferrer'
            >
                <img src={twitter} alt='icone do twitter' />
            </a>
            <a
                href='https://www.instagram.com/aluraonline/?hl=en' 
                target='_blank' 
                rel='noreferrer'
            >
                <img src={instagram} alt='icone do instagram' />
            </a>
        </div>
        <p>Desenvolvido por Alura</p>
    </footer>
  );
}
