import Banner from "../../componentes/Banner";
import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import style from './paginaInicial.module.scss';
import Rodape from '../../componentes/Rodape'
import Galeria from "../../componentes/Galeria";
import Populares from "../../componentes/Populares";


export default function PaginaInicial(){
    return(
        <>    
            <Cabecalho />
            <main>
                <section className={style.principal}>
                    <Menu />
                    <Banner />

                </section>
                <div className={style.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />
        </>
    );
}
   
