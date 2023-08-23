import Banner from "../../componentes/Banner";
import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import style from './paginaInicial.module.scss';
import Rodape from '../../componentes/Rodape'


export default function PaginaInicial(){
    return(
        <>    
            <Cabecalho />
            <main>
                <section className={style.principal}>
                    <Menu />
                    <Banner />

                </section>
            </main>
            <Rodape />
        </>
    );
}
   
