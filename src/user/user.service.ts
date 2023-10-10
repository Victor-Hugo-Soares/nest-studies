import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreatorUserInput } from './dto/create-user.input';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private UserRepository: Repository<User>
    ) {}

    async findAllUsers() : Promise<User[]> {
        const users = await this.UserRepository.find();
        return users;
    }

    async createUser(data: CreatorUserInput): Promise <User>{
        const user = await this.UserRepository.create(data);
        const userSaved = await this.UserRepository.save(user); 

        if(!userSaved) {
            throw new InternalServerErrorException('Problema para criar um usuário. ')
        }

        return userSaved;
    }
}
