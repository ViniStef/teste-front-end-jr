import style from "./style.module.scss";

type standardExpected = {
    standardTitle: string,
    standardDescription: string,
    isProduct: boolean
}

export const StandardInfo = ({standardTitle, standardDescription, isProduct}:standardExpected) => {
    return (
        <div className={isProduct ? style.product__container : style.standard__container}>
          <div className={style.standard__wrapper}>
              <h3 className={style.standard__title}>{standardTitle}</h3>
              <p className={style.standard__description}>{standardDescription}</p>
              <button className={style.standard__button}>CONFIRA</button>
          </div>
        </div>
    );
}