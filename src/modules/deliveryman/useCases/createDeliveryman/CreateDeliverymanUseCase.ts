import { hash } from 'bcrypt'
import { prisma } from '../../../../database/prismaClient'
import { AppError } from '../../../../errors/AppError'

interface ICreateDeliveryman {
  username: string;
  password: string;
}

export class CreateDeliveryman {
  async execute({ username, password }: ICreateDeliveryman) {
    const deliverymanExist = await prisma.deliveryman.findUnique(
      {
        where: {
          username
        }
      }
    )

    if (deliverymanExist) {
      throw new AppError('Deliveryman already exists')
    }

    const hashpassword = await hash(password, 10)

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: hashpassword
      }
    })

    return deliveryman
  }
}