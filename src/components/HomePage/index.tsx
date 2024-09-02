import { useEffect, useState } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";
import { Modal } from "../Main/ProductDisplaySection/Modal";
import axios from "axios";

export type Product = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
};

export type Products = Product[]

export const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [productList, setProductList] = useState<Product[]>([]);

  const [productInfo, setProductInfo] = useState<Product>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://api.allorigins.win/get?url=https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
        );
        const jsonData = JSON.parse(response.data.contents);
        const productData = jsonData.products;
        setProductList(productData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect( () => {
    console.log(isVisible);
    
  },[isVisible])

  return (
    <div>
      
      <Header />
      <Main productList={productList} setProductInfo={setProductInfo} setIsVisible={setIsVisible} />
      {isVisible ? <Modal productInfo={productInfo} productList={productList} setIsVisible={setIsVisible} />: null}
      <Footer />
    </div>
  );
};
