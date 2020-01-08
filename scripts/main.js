import { getProducts } from "./ProductProvider.js";
import { getProductTypes } from "./ProductTypeProvider.js";
import ProductList from "./ProductList.js";


getProductTypes()
  .then(getProducts)
  .then(ProductList)