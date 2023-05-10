import { Injectable } from '@nestjs/common';
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

  update(updateUserDto: UpdateUserDto, param: { id: number }) {
    return { updateUserDto, param };
  }

  show(param: { id: number }) {
    return param;
  }

  delete(param: { id: number }) {
    return param;
  }
}
