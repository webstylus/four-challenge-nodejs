import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userAlreadyExists = this.usersRepository.findByEmail(email);
    if (!userAlreadyExists) {
      return this.usersRepository.create({ email, name });
    }

    throw new Error("User already exists.");
  }
}

export { CreateUserUseCase };
