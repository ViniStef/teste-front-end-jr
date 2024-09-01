import { StandardInfo } from "./StandardInfo";
import style from "./style.module.scss";

export const PartnersProductSection = () => {
  return (
    <section className={style.partnersProduct__section}>
      <div className={style.partnersProduct__wrapper}>
        <StandardInfo standardTitle={"Parceiros"} standardDescription={"Lorem ipsum dolor sit amet, consectetur"} />
        <StandardInfo standardTitle={"Parceiros"} standardDescription={"Lorem ipsum dolor sit amet, consectetur"} />
      </div>
      <div className={style.related__container}>
      <div className={style.related__wrapper}>
          <hr className={style.related__line} />
          <h4 className={style.related__title}>Produtos Relacionados</h4>
          <hr className={style.related__line} />
        </div>
        <p className={style.viewAll__text}>Ver todos</p>
      </div>

      <div>
        <div>
          <h3>Produtos</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <button>CONFIRA</button>
        </div>
        <div>
          <h3>Produtos</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <button>CONFIRA</button>
        </div>
      </div>
    </section>
  );
};
