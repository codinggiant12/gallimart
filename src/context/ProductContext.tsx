import { createContext, useEffect, useState } from "react";
import { Product } from "../../network/api/get_all_product/AllProduct.interface";
import { AllProduct } from "../../network/api/get_all_product/AllProduct.api";
interface ProductContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  fetchProducts: () => Promise<void>;
}

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined,
);
const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const fetchProducts = async () => {
    const res = await AllProduct.getAllProducts();
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ products, setProducts, fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
