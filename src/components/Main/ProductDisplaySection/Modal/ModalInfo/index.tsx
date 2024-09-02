import style from "./style.module.scss";
import minus from "../../../../../assets/svgs/minus.svg"
import plus from "../../../../../assets/svgs/plus.svg"


export const ModalInfo = ({productInfo}:any) => {

    
    return (
        <div className={style.modal__infos}>
        <img className={style.product__img} src={productInfo.productImg} alt="Produto" />
        <div className={style.product__purchase}>
            <p className={style.product__name}>{productInfo.productName}</p>
            <p className={style.product__price}>{"R$"+ productInfo.productPrice}</p>
            <p className={style.product__description}>{productInfo.productDescription}</p>
            <a className={style.product__details} href="#">{productInfo.productDetail}</a>
            <div className={style.amount__wrapper}>
                <button>
                    <img src={minus} alt="Minus" />
                </button>
                <p>1</p>
                <button><img src={plus} alt="Plus" /></button>
            </div>
            <button className={style.purchase__button}>COMPRAR</button>
        </div>
    </div>
    );
}