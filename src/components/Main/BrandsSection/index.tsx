import { BrandItem } from "./BrandItem";
import style from "./style.module.scss";
import logo from "../../../assets/svgs/LogoMain.svg";
import rightArrow from "../../../assets/svgs/ArrowRight.svg";

export const BrandsSection = () => {
  return (
    <section className={style.brand__section}>
      <h4 className={style.brand__title}>Navegue por marcas</h4>
      <nav className={style.brand__nav}>
        <ul className={style.brand__list}>
          <BrandItem brandImg={logo} />
          <BrandItem brandImg={logo} />
          <BrandItem brandImg={logo} />
          <BrandItem brandImg={logo} />
          <BrandItem brandImg={logo} />
          <button className={style.control__button}>
            <img src={rightArrow} alt="Right Arrow" />
          </button>
        </ul>
        
      </nav>

    </section>
  );
};
