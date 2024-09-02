import style from "./style.module.scss";

export const CarouselItem = (props: any) => {
  return (
    <li tabIndex={props.tabIndex} className={style.carousel__item}>
      <img className={style.item__image} src={props.productImg} alt="Imagem do Produto" />
      <p className={style.item__description}>{props.productName}</p>
      <p className={style.item__prevPrice}>{"R$ "+props.productPrevPrice}</p>
      <p className={style.item__price}>{"R$ "+ props.productPrice}</p>
      <p className={style.item__installment}>{props.productInstallment}</p>
      <span className={style.item__shipping}>{"Frete Grátis"}</span>
      <button onClick={(e) => {props.setIsVisible(true), props.setProductInfo(props)}} className={style.purchase__button}>COMPRAR</button>
    </li>
  );
};
