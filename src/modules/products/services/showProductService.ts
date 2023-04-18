import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../typeorm/repositories/productRepository";
import Product from "../typeorm/entities/product";
import ApiError from "../../../util/errors/api-error";

interface RequestProps {
  id: string;
}

export default class ShowProductService {
  public async execute({ id }: RequestProps): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new ApiError()
    }

    return product;
  }
}
