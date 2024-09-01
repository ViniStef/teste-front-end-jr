import style from "./style.module.scss";
import shield from "../../../assets/svgs/ShieldCheck.svg"
import truck from "../../../assets/svgs/Truck.svg"
import creditCard from "../../../assets/svgs/CreditCard.svg"
import logo from "../../../assets/svgs/LogoMain.svg"
import magnifyingGlass from "../../../assets/svgs/magnifyingGlass.svg"
import box from "../../../assets/svgs/BoxArrow.svg";
import heart from "../../../assets/svgs/Heart.svg";
import user from "../../../assets/svgs/UserCircle.svg";
import cart from "../../../assets/svgs/ShoppingCart.svg";
import crown from "../../../assets/svgs/CrownSimple.svg";

export const InfoSection = () => {
  return (
    <section className={style.info__section}>
      <div className={style.benefits__container}>
        <div className={style.info__benefit}>
          <img src={shield} alt="Escudo" />
          <p className={style.benefit__text}>
            Compra <span className={style.benefit__highlight}>100% segura</span>
          </p>
        </div>

        <div className={style.info__benefit}>
          <img src={truck} alt="Caminhão" />
          <p className={style.benefit__text}>
            <span className={style.benefit__highlight}>Frete grátis</span> acima R$ 200
          </p>
        </div>

        <div className={style.info__benefit}>
          <img src={creditCard} alt="Cartão" />
          <p className={style.benefit__text}>
            <span className={style.benefit__highlight}>Parcele</span> suas compras
          </p>
        </div>
      </div>

      <div className={style.utilities__container}>
        <img src={logo} alt="Logo" />
        <div className={style.search__utilities}>
          <input className={style.utilities__input} type="text" placeholder="O que você está buscando?" />
          <button className={style.utilities__button}><img src={magnifyingGlass} alt="Magnifying Glass" /></button>
        </div>
        <div className={style.icons__utilities}>
          <button><img src={box} alt="Caixa" /></button>
          <button><img src={heart} alt="Coração" /></button>
          <button><img src={user} alt="Usuário" /></button>
          <button><img src={cart} alt="Carrinho" /></button>
        </div>
      </div>

      <nav className={style.categories__nav}>
        <ul className={style.categories__list}>
          <li className={style.categories__item}>
            <p>TODAS CATEGORIAS</p>
          </li>
          <li className={style.categories__item}>
            <p>SUPERMERCADO</p>
          </li>
          <li className={style.categories__item}>
            <p>LIVROS</p>
          </li>
          <li className={style.categories__item}>
            <p>MODA</p>
          </li>
          <li className={style.categories__item}>
            <p>LANÇAMENTOS</p>
          </li>
          <li className={style.categories__item}>
            <p>OFERTAS DO DIA</p>
          </li>
          <li className={style.categories__item}>
            <img src={crown} alt="Coroa" />
            <p>ASSINATURA</p>
          </li>
        </ul>
      </nav>
    </section>
  );
};
