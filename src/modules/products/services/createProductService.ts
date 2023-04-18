import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../typeorm/repositories/productRepository";
import ApiError from "../../../util/errors/api-error";
import Product from "../typeorm/entities/product";

interface RequestProps {
  name: string;
  price: number;
  quantity: number;
}

export default class CreateProductService {
  public async execute({ name, price, quantity }: RequestProps): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);
    const productExists = await productsRepository.findByName(name);

    if (productExists) {
      throw new ApiError();
    }

    const product = productsRepository.create({
      name,
      price,
      quantity
    });

    await productsRepository.save(product);

    return product;
  }
}
