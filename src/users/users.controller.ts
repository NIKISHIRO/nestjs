import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    public service: UsersService,
  ) {}

  @Get()
  getUsers() {
    return 'lol';
  }

  @Get('2')
  getUsers2() {
    return 'lol2';
  }
}
