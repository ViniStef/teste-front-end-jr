import style from "./style.module.scss";
import facebook from "../../../assets/socials/023-facebook.svg";
import instagram from "../../../assets/socials/044-instagram.svg";
import youtube from "../../../assets/socials/116-youtube.svg";
import alelo from "../../../assets/payments/alelo.png";
import amex from "../../../assets/payments/amex.png";
import dinners from "../../../assets/payments/dinners.png";
import elo from "../../../assets/payments/elo.png";
import ifood from "../../../assets/payments/ifood.png";
import mastercard from "../../../assets/payments/mastercard.png";
import pix from "../../../assets/payments/pix.png";
import sodexo from "../../../assets/payments/sodexo.png";
import ticket from "../../../assets/payments/ticket.png";
import visa from "../../../assets/payments/visa.png";

export const ContactSection = () => {
  return (
    <section className={style.contact__section}>
      <div className={style.first__section}>
        <div className={style.section__aboutUs}>
          <p className={style.section__title}>Sobre nós</p>
          <div className={style.aboutUs__links}>
            <a className={style.link__anchor} href="#">CONHEÇA</a>
            <a className={style.link__anchor} href="#">COMO COMPRAR</a>
            <a className={style.link__anchor} href="#">INDICAÇÃO E DESCONTO</a>
          </div>
        </div>

        <div className={style.section__social}>
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="#">
            <img src={youtube} alt="Youtube" />
          </a>
        </div>
      </div>
      <div className={style.second__section}>
        <p className={style.section__title}>INFORMAÇÕES ÚTEIS</p>
        <div className={style.info__links}>
          <a className={style.link__anchor} href="#">FALE CONOSCO</a>
          <a className={style.link__anchor} href="#">DÚVIDAS</a>
          <a className={style.link__anchor} href="#">PRAZOS DE ENTREGA</a>
          <a className={style.link__anchor} href="#">FORMAS DE PAGAMENTO</a>
          <a className={style.link__anchor} href="#">POLÍTICA DE PRIVACIDADE</a>
          <a className={style.link__anchor} href="#">TROCAS E DEVOLUÇÕES</a>
        </div>
      </div>
      <div className={style.third__section}>
        <p className={style.section__title}>FORMAS DE PAGAMENTO</p>
        <div className={style.payment__options}>
          <img src={visa} alt="VISA" />
          <img src={elo} alt="ELO" />
          <img src={alelo} alt="Alelo" />
          <img src={dinners} alt="Dinners" />
          <img src={ifood} alt="iFood" />
          <img src={mastercard} alt="Mastercard" />
          <img src={pix} alt="PIX" />
          <img src={amex} alt="American Express" />
          <img src={ticket} alt="Ticket" />
          <img src={sodexo} alt="Sodexo" />
        </div>
      </div>
    </section>
  );
};
