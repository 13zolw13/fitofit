import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { RegisterUserDto } from 'src/dto/registerUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('healthcheck')
  async heelthCheck() {
    return 'user server is working';
  }

  @Post('/register')
  async register(@Body(new ValidationPipe()) inputUserDto: RegisterUserDto) {
    return await this.userService.create(inputUserDto);
  }
  @Get('/:id')
  async userDetails(@Param('id') id: string) {
    return await this.userService.findOne(id);
  }
}
