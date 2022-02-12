import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../../database/prismaClient';
import { AppError } from '../../../../errors/AppError';

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findUnique({
      where: {
        username
      }
    })

    if(!deliveryman) {
      throw new AppError('Username or password invalid!')
    }

    const passwordMatch = await compare(password, deliveryman.password);
    
    if(!passwordMatch) {
      throw new AppError('Username or password invalid!')
    }

    const token  = sign({username}, 'GZzvwmXE4Ab75RssEJBKYqSnamBRf6uNWhy', {
      subject: deliveryman.id,
      expiresIn: '1d',
    })

    return token
  }
}