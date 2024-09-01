import style from "./style.module.scss";

export const DiscountSection = () => {
  return (
    <section className={style.discount__section}>
      <div className={style.discount__content}>
        <div className={style.content__wrap}>
          <h1 className={style.content__title}>Venha conhecer nossas promoções</h1>
          <h2 className={style.content__subtitle}>50% Off nos produtos</h2>
          <button className={style.content__button}>Ver produto</button>
        </div>
      </div>
    </section>
  );
};
