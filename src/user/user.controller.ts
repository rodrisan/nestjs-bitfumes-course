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

@Controller('user')
export class UserController {
  @Get()
  getUsers() {
    return {
      name: 'Rod',
      email: 'j@r.s',
    };
  }

  @Post()
  store(@Req() req: Request) {
    return req.body;
  }

  @Get(':id')
  find(@Param() params: { id: number }) {
    return params.id;
  }

  @Patch(':id')
  update(@Req() req: Request) {
    return req.body;
  }

  @Delete(':id')
  delete(@Param() id: number) {
    return id;
  }
}
