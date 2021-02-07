import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    public service: UsersService,
  ) {}

  @Get('add')
  async addUser() {
    const response = this.service.addUser({
      login: 'SEXDAMIR2',
      password: 'SEXMORJ3',
      email: 'SEXNASRTDINOV@damir.com4',
    });

    return response;
  }
}
