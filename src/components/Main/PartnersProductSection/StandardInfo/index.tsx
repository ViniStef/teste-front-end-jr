import style from "./style.module.scss";

export const StandardInfo = ({standardTitle, standardDescription}:any) => {
    return (
        <div className={style.standard__container}>
          <div className={style.standard__wrapper}>
              <h3 className={style.standard__title}>{standardTitle}</h3>
              <p className={style.standard__description}>{standardDescription}</p>
              <button className={style.standard__button}>CONFIRA</button>
          </div>
        </div>
    );
}