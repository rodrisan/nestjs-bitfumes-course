import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get()
  getUsers() {
    return this._userService.get();
  }

  @Post()
  store(@Body() body: any) {
    return this._userService.create(body);
  }

  @Patch(':id')
  update(@Body() body: any, @Param() param: { id: number }) {
    return this._userService.update(body, param);
  }

  @Get(':id')
  getUser(@Param() param: { id: number }) {
    return this._userService.show(param);
  }

  @Delete(':id')
  delete(@Param() param: { id: number }) {
    return this._userService.delete(param);
  }
}
