import { CategoryItem } from "./CategoryItem";
import { ProductTypeItem } from "./ProductTypeItem";
import style from "./style.module.scss";
import { CarouselItem } from "./CarouselItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ButtonGroup } from "./ButtonGroup";
import { Product } from "../../HomePage";

export const ProductDisplaySection = ({
  setIsVisible,
  productList,
  setProductInfo,
}: any) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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

        <Carousel infinite={true} arrows={false} customButtonGroup={<ButtonGroup />} itemClass={style.slider__item} sliderClass={style.slider__content} className={style.carousel__container} responsive={responsive}>
        {productList.map((product:Product, index:number) => {
              return (
                <CarouselItem
                  setIsVisible={setIsVisible}
                  setProductInfo={setProductInfo}
                  tabIndex={index}
                  key={crypto.randomUUID()}
                  productImg={product.photo}
                  productDescription={product.descriptionShort}
                  productName={product.productName}
                  productPrevPrice={product.price + product.price * 0.1}
                  productInstallment={
                    "ou 2x de R$ " + product.price / 2 + " sem juros"
                  }
                  productPrice={product.price}
                />
              );
            })}
        </Carousel>

      </div>
    </section>
  );
};
