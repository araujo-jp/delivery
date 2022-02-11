import { hash } from 'bcrypt'

import { prisma } from '../../../../database/prismaClient';

interface ICreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ username, password }: ICreateClient) {
    const clientExist = await prisma.clients.findFirst(
      {
        where: {
          username: {
            mode: "insensitive"
          }
        }
      }
    )

    if(clientExist) {
      throw new Error('Client already exists')
    }

    const hashpassword = await hash(password, 10)

    const client = await prisma.clients.create({
      data: {
        username,
        password: hashpassword
      }
    })

    return client
  }
}