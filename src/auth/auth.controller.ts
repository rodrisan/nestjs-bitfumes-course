import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly _userService: UserService) {}

  @Post('login')
  async login(@Body() loginDto: any) {
    const user = await this._userService.findByEmail(loginDto.email);

    if (user) {
      if (user.password === loginDto.password) {
        return user;
      }

      return "password does't match";
    }

    return 'unautheticated';
  }
}
