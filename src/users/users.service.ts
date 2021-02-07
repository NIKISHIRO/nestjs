import {Inject, Injectable} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}

  addUser(user: User): Promise<User[]> {
    this.usersRepository.insert(user);

    return this.usersRepository.find();
  }
}
