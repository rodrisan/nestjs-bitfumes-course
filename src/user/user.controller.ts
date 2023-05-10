import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get()
  getUsers() {
    return this._userService.get();
  }

  @Post()
  store(@Body() createUserDto: CreateUserDto) {
    return this._userService.create(createUserDto);
  }

  @Patch(':id')
  update(@Body() updateUserDto: UpdateUserDto, @Param() param: { id: number }) {
    return this._userService.update(updateUserDto, param);
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
