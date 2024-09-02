import { ModalInfo } from "./ModalInfo";
import style from "./style.module.scss";
import close from "../../../../assets/svgs/close.svg"

export const Modal = ({setIsVisible, productList, productInfo}:any) => {
    console.log(productList)
    return (
        <div className={style.modal__container} role="dialog">
            <div className={style.modal__content}>
                <button className={style.close__button} onClick={() => {setIsVisible(false)}}>
                    <img src={close} alt="Close" />
                </button>
                    
                    <ModalInfo productInfo={productInfo} />
            </div>
        </div>
    );
}