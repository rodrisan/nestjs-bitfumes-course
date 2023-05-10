import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
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
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this._userService.update(updateUserDto, id);
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this._userService.show(id);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this._userService.delete(id);
  }
}
