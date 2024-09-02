import style from "./style.module.scss";

export const CarouselItem = ({productImg, productDescription, productName, productPrevPrice, productPrice, productInstallment}: any) => {
  return (
    <li className={style.carousel__item}>
      <img className={style.item__image} src={productImg} alt="Imagem do Produto" />
      <p className={style.item__description}>{productName}</p>
      <p className={style.item__prevPrice}>{productPrevPrice}</p>
      <p className={style.item__price}>{productPrice}</p>
      <p className={style.item__installment}>{productInstallment}</p>
      <span className={style.item__shipping}>{"Frete Grátis"}</span>
      <button className={style.purchase__button}>COMPRAR</button>
    </li>
  );
};
