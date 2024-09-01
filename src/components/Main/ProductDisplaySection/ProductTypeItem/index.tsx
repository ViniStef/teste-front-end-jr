import style from "./style.module.scss";

export const ProductTypeItem = ({ productType }: any) => {
  return (
    <li className={style.productType__item}>
      <button className={style.productType__button}>{productType}</button>
    </li>
  );
};
