import style from "./style.module.scss";

export const NewsletterSection = () => {
  return (
    <section className={style.newsletter__section}>
      <div className={style.newsletter__wrapper}>
        <div className={style.newsletter__headers}>
          <p className={style.newsletter__title}>CADASTRE-SE E RECEBA NOSSAS</p>
          <p className={style.newsletter__highlight}>NOVIDADES E PROMOÇÕES</p>
        </div>
        <p className={style.newsletter__description}>
          Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem
          ipsum
        </p>
      </div>
      <div className={style.form__wrapper}>
        <input className={style.form__input} type="text" placeholder="SEU E-MAIL" />
        <button className={style.form__button}>OK</button>
      </div>
    </section>
  );
};
