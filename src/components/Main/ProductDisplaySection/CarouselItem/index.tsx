import style from "./style.module.scss";

export const CarouselItem = ({productImg, productDescription, productPrevPrice, productPrice, productInstallment, freeDelivery}: any) => {
  return (
    <li className={style.carousel__item}>
      <img className={style.item__image} src={productImg} alt="Imagem do Produto" />
      <p className={style.item__description}>{productDescription}</p>
      <p className={style.item__prevPrice}>{productPrevPrice}</p>
      <p className={style.item__price}>{productPrice}</p>
      <p className={style.item__installment}>{productInstallment}</p>
      <span className={style.item__shipping}>{freeDelivery ? freeDelivery : "Frete grátis" }</span>
      <button className={style.purchase__button}>COMPRAR</button>
    </li>
  );
};
