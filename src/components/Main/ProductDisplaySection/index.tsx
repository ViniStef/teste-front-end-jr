import { CategoryItem } from "./CategoryItem";
import { ProductTypeItem } from "./ProductTypeItem";
import style from "./style.module.scss";
import { CarouselItem } from "./CarouselItem";
import { Product } from "../../HomePage";
import arrowLeft from "../../../assets/svgs/ArrowLeft.svg"
import arrowRight from "../../../assets/svgs/ArrowRight.svg"
export const ProductDisplaySection = ({
  setIsVisible,
  productList,
  setProductInfo,
}: any) => {

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

        <div className={style.carousel__wrapper}>
          <ul className={style.carousel__container}>
            {productList.slice(0, 4).map((product:Product, index:number) => {
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
          </ul>
          <div className={style.slider__buttons}>
            <button className={style.button__left}>
              <img src={arrowLeft} alt="Left" />
              </button>
              <button className={style.button__right}>
                <img src={arrowRight} alt="Right" />
              </button>
          </div>
        </div>

      </div>
    </section>
  );
};
