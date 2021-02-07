import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { getRepositoryProvider } from '../shared';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [UsersController],
  providers: [
    getRepositoryProvider('USERS_REPOSITORY', User, 'DATABASE_CONNECTION'),
    UsersService,
  ],
  imports: [
    DatabaseModule,
  ],
})
export class UsersModule {}
