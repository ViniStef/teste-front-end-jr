import { ContactSection } from "./ContactSection";
import { NewsletterSection } from "./NewsletterSection";
import style from "./style.module.scss";
import econverse from "../../assets/svgs/Econverse.svg"
import vtex from "../../assets/svgs/vtex.svg"

export const Footer = () => {
    return (
        <footer className={style.footer__content}>
        <div className={style.section__wrapper}>
            <ContactSection />
            <NewsletterSection />

        </div>
        <hr />
        <div className={style.copyright__wrapper}>
            <p className={style.copyright__text}>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
            É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
            <div>
                <img src={econverse} alt="Econverse" />

                <img src={vtex} alt="Vtex" />
            </div>
            </div>
      </footer>
    );
}