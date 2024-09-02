import style from "./style.module.scss";

type brandImg = {
  brandImg: string
}

export const BrandItem = ({ brandImg }: brandImg) => {
  return (
    <li className={style.brand__item}>
      <img src={brandImg} alt="Brand Logo" />
    </li>
  );
};
