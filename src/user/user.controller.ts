import {
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
  store(@Req() req: Request) {
    return this._userService.create(req);
  }

  @Patch(':id')
  update(@Req() req: Request, @Param() param: { id: number }) {
    return this._userService.update(req, param);
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
