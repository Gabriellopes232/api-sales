import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../typeorm/repositories/productRepository";
import ApiError from "../../../util/errors/api-error";

interface RequestProps {
  id: string;
}

export default class DeleteProductService {
  public async execute({ id }: RequestProps): Promise<void> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new ApiError()
    }

    await productsRepository.remove(product);
  }
}
