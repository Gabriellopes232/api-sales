import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../typeorm/repositories/productRepository";
import Product from "../typeorm/entities/product";
import ApiError from "../../../util/errors/api-error";

interface RequestProps {
  id: string;
  name: string;
  price: number;
  quantity: number
}

export default class UpdateProductService {
  public async execute({
    id,
    name,
    price,
    quantity
  }: RequestProps): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new ApiError();
    }

    const productExists = await productsRepository.findByName(name);

    if (productExists) {
      throw new ApiError();
    }

    product.name = name;
    product.price = price;
    product.quantity = quantity;

    await productsRepository.save(product)

    return product;
  }
}
