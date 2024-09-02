import smartphone from "../../../../assets/highlights/Smartphone.png"
import { Product, Products } from "../../../HomePage";
import { ModalInfo } from "./ModalInfo";
import style from "./style.module.scss";


export const Modal = ({setIsVisible, productList, productInfo}:any) => {
    console.log(productList)
    return (
        <div className={style.modal__container} role="dialog">
            <div className={style.modal__content}>
                <button className={style.close__button} onClick={() => {setIsVisible(false)}}>X</button>
                    
                    <ModalInfo productInfo={productInfo} />
            </div>
        </div>
    );
}