import style from "./style.module.scss";

export const BrandItem = ({ brandImg }: any) => {
  return (
    <li className={style.brand__item}>
      <img src={brandImg} alt="Brand Logo" />
    </li>
  );
};
