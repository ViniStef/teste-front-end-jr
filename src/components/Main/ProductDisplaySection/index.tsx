import { CategoryItem } from "./CategoryItem";
import { ProductTypeItem } from "./ProductTypeItem";
import style from "./style.module.scss";
import arrowLeft from "../../../assets/svgs/ArrowLeft.svg";
import arrowRight from "../../../assets/svgs/ArrowRight.svg";
import smartphone from "../../../assets/highlights/Smartphone.png";
import { CarouselItem } from "./CarouselItem";

type Product = {
  productName:string;
  productDescription:string;
  productPhoto:string;
  productPrice:number;
}

type Products = Product[];

export const ProductDisplaySection = () => {

  return (
    <section>
      <nav>
        <ul className={style.categories__list}>
          <CategoryItem
            categoryName={"Tecnologia"}
            categoryImg={"src/assets/categories/monitor.svg"}
          />
          <CategoryItem
            categoryName={"Supermercado"}
            categoryImg={"src/assets/categories/supermercado.svg"}
          />
          <CategoryItem
            categoryName={"Bebidas"}
            categoryImg={"src/assets/categories/bebidas.svg"}
          />
          <CategoryItem
            categoryName={"Ferramentas"}
            categoryImg={"src/assets/categories/ferramentas.svg"}
          />
          <CategoryItem
            categoryName={"Saúde"}
            categoryImg={"src/assets/categories/saude.svg"}
          />
          <CategoryItem
            categoryName={"Esportes e Fitness"}
            categoryImg={"src/assets/categories/esportes.svg"}
          />
          <CategoryItem
            categoryName={"Moda"}
            categoryImg={"src/assets/categories/moda.svg"}
          />
        </ul>
      </nav>

      <div>
        <div className={style.related__container}>
          <hr className={style.related__line} />
          <h4 className={style.related__title}>Produtos Relacionados</h4>
          <hr className={style.related__line} />
        </div>

        <nav className={style.productTypes__container}>
          <ul className={style.productTypes__list}>
            <ProductTypeItem productType={"CELULAR"} />
            <ProductTypeItem productType={"ACESSÓRIOS"} />
            <ProductTypeItem productType={"TABLETS"} />
            <ProductTypeItem productType={"NOTEBOOKS"} />
            <ProductTypeItem productType={"TVS"} />
            <ProductTypeItem productType={"VER TODOS"} />
          </ul>
        </nav>

        <div className={style.carousel__container}>
          <div className={style.buttons__wrapper}>
            <button className={style.arrowLeft__carousel}>
              <img src={arrowLeft} alt="Left Arrow" />
            </button>
            <button className={style.arrowLeft__carousel}>
              <img src={arrowRight} alt="Right Arrow" />
            </button>
          </div>
          <ul className={style.product__carousel}>
            <CarouselItem productImg={smartphone} productDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} productPrevPrice={"R$15,00"} productPrice={"R$20,00"} productInstallment={"ou 2x de R$ 49,95 sem juros"} freeDelivery={false} />
            <CarouselItem productImg={smartphone} productDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} productPrevPrice={"R$15,00"} productPrice={"R$20,00"} productInstallment={"ou 2x de R$ 49,95 sem juros"} freeDelivery={false} />
            <CarouselItem productImg={smartphone} productDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} productPrevPrice={"R$15,00"} productPrice={"R$20,00"} productInstallment={"ou 2x de R$ 49,95 sem juros"} freeDelivery={false} />
            <CarouselItem productImg={smartphone} productDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} productPrevPrice={"R$15,00"} productPrice={"R$20,00"} productInstallment={"ou 2x de R$ 49,95 sem juros"} freeDelivery={false} />
          </ul>
          
        </div>
      </div>
    </section>
  );
};
