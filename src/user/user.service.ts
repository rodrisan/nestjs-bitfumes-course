import { Injectable, Param } from '@nestjs/common';
import { Request } from 'express';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  get() {
    return {
      name: 'Rod',
      email: 'j@r.com',
    };
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
