import arrowLeft from "../../../../assets/svgs/ArrowLeft.svg"
import arrowRight from "../../../../assets/svgs/ArrowRight.svg"
import style from "./style.module.scss"

export const ButtonGroup = ({next, previous, goToSlide,...rest}:any) => {
    const {carouselState: {} } = rest;
    return (
        <div className={style.carousel__arrows}>
            <button className={style.button__left} onClick={() => previous()}>
                <img src={arrowLeft} alt="Left Arrow" />
            </button>
            <button className={style.button__right} onClick={() => next()}>
            <img src={arrowRight} alt="Right Arrow" />
            </button>
        </div>
    );
}