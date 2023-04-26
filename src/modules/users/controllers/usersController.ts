import { Request, Response } from "express";
import ListUserService from "../services/listUserService";
import CreateUserService from "../services/createUserService";

export default class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listUser = new ListUserService();

    const users = await listUser.execute();

    return res.json(users)
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      email,
      name,
      password
    })

    return res.json(user)
  }
}
