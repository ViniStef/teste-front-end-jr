import { BrandsSection } from "./BrandsSection";
import { PartnersProductSection } from "./PartnersProductSection";
import { ProductDisplaySection } from "./ProductDisplaySection";

export const Main = ({setIsVisible, productList, setProductInfo}:any) => {
  return (
    <main>

    <ProductDisplaySection productList={productList} setProductInfo={setProductInfo} setIsVisible={setIsVisible} />
    <PartnersProductSection />
    <BrandsSection />
    
    </main>
  );
};
