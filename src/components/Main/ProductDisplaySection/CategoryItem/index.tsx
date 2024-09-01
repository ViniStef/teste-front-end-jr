import style from "./style.module.scss";

export const CategoryItem = ({categoryName, categoryImg}: any) => {
  return (
    <li className={style.category__item}>
      <div className={style.category__wrapper}>
        <img className={style.category__image} src={categoryImg} alt={categoryName} />
      </div>
      <p className={style.category__name}>{categoryName}</p>
    </li>
  );
};
