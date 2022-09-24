import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { promises } from 'fs';
import { User } from 'src/entites/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly UserRepository: Repository<User>){};
    getUsers(): Promise<User[]> {
        return this.UserRepository.find();
    }
}
