import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { name, email } = request.body;

      return response
        .status(201)
        .json(this.createUserUseCase.execute({ name, email }));
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { CreateUserController };
