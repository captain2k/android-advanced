import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/db/prisma.service'
import { RegisterDto } from './dto/register.dto'
import { UserEntity } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  me = async (userId: number): Promise<UserEntity> => {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    })
    console.log(user)
    if (!user) {
      throw new NotFoundException('Your account is not exist')
    }

    return user
  }

  async create(userDto: RegisterDto): Promise<> {}
}
