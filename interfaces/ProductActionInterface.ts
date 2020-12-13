import Product from "../models/Product";

export interface ProductActionInterface{
    type: string,
    productItem: Product
}
