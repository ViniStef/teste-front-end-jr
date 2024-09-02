import style from "./style.module.scss";

type productType = {
  productType: string
}

export const ProductTypeItem = ({ productType }:productType) => {
  return (
    <li className={style.productType__item}>
      <button className={style.productType__button}>{productType}</button>
    </li>
  );
};
