import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { PrismaService } from 'src/db/prisma.service'
import { UsersModule } from 'src/users/users.module'
import { AuthService } from './auth.service'
import { LocalStrategy } from './local.strategy'

@Module({
  imports: [UsersModule, PassportModule],
  providers: [PrismaService, LocalStrategy, AuthService],
})
export class AuthModule {}
