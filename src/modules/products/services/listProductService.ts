import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../typeorm/repositories/productRepository";
import Product from "../typeorm/entities/product";

export default class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductRepository);

    const products = productsRepository.find();

    return products;
  }
}
