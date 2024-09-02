import { CategoryItem } from "./CategoryItem";
import { ProductTypeItem } from "./ProductTypeItem";
import style from "./style.module.scss";
import arrowLeft from "../../../assets/svgs/ArrowLeft.svg";
import arrowRight from "../../../assets/svgs/ArrowRight.svg";
import { CarouselItem } from "./CarouselItem";
import axios from "axios";
import { useEffect, useState } from "react";

type Product = {
  productName: string;
  descriptionShort: string; 
  photo: string; 
  price: number;
};


export const ProductDisplaySection = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://api.allorigins.win/get?url=https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
        );
        const jsonData = JSON.parse(response.data.contents);
        const productData = jsonData.products;
        setProductList(productData);
        console.log(productData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
            {productList.map((product) => (
              <CarouselItem
                key={crypto.randomUUID()}
                productImg={product.photo}
                productDescription={product.descriptionShort}
                productName={product.productName}
                productPrevPrice={(product.price + (product.price * 0.10))}
                productInstallment={"ou 2x de R$ "+ (product.price / 2) + " sem juros"}
                productPrice={product.price}
              />
            ))}
            
          </ul>
        </div>
      </div>
    </section>
  );
};
