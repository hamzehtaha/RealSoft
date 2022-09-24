import { Controller, Get } from '@nestjs/common';
import { User } from 'src/entites/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor (private readonly userservice : UserService){}
    
  @Get()
  getUsers(): Promise<User[]> {
    return this.userservice.getUsers();
  }
}
