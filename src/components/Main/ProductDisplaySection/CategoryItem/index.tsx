import style from "./style.module.scss";

type categoriesExpected = {
  categoryName: string,
  categoryImg: string
}

export const CategoryItem = ({categoryName, categoryImg}: categoriesExpected) => {

  return (
    <li className={style.category__item}>
      <div className={style.category__wrapper}>
        <img className={style.category__image} src={categoryImg} alt={categoryName} />
      </div>
      <p className={style.category__name}>{categoryName}</p>
    </li>
  );
};
