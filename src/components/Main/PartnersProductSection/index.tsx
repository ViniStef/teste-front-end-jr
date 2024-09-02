import { StandardInfo } from "./StandardInfo";
import style from "./style.module.scss";

export const PartnersProductSection = () => {
  return (
    <section className={style.partnersProduct__section}>
      <div className={style.partnersProduct__wrapper}>
        <StandardInfo isProduct={false} standardTitle={"Parceiros"} standardDescription={"Lorem ipsum dolor sit amet, consectetur"} />
        <StandardInfo isProduct={false} standardTitle={"Parceiros"} standardDescription={"Lorem ipsum dolor sit amet, consectetur"} />
      </div>
      <div className={style.related__container}>
      <div className={style.related__wrapper}>
          <hr className={style.related__line} />
          <h4 className={style.related__title}>Produtos Relacionados</h4>
          <hr className={style.related__line} />
        </div>
        <p className={style.viewAll__text}>Ver todos</p>
      </div>

      <div className={style.partnersProduct__wrapper}>
        <StandardInfo isProduct={true} standardTitle={"Produtos"} standardDescription={"Lorem ipsum dolor sit amet, consectetur"} />
        <StandardInfo isProduct={true} standardTitle={"Produtos"} standardDescription={"Lorem ipsum dolor sit amet, consectetur"} />
      </div>
    </section>
  );
};
