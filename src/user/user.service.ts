import { Injectable, Param } from '@nestjs/common';
import { Request } from 'express';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly _userRepository: Repository<User>,
  ) {}

  get(): Promise<User[]> {
    return this._userRepository.find();
  }

  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  update(updateUserDto: UpdateUserDto, id: number) {
    return { updateUserDto, id };
  }

  show(id: number) {
    return { id };
  }

  delete(id: number) {
    return { id };
  }
}
