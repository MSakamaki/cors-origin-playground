import {
  Controller,
  Get,
  Post,
  Options,
  HttpException,
  HttpStatus,
  UseInterceptors
} from '@nestjs/common';

import { Message } from '@cros-examples/api-interfaces';

import { AppService } from './app.service';
import { AppInterceptor } from './app.intercepter';

@UseInterceptors(AppInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Options('hello')
  optionsData() {
    // throw new HttpException('INTERNAL_SERVER_ERROR', HttpStatus.INTERNAL_SERVER_ERROR);
    return {};
  }

  @Post('hello')
  postData() {
    // throw new HttpException('INTERNAL_SERVER_ERROR', HttpStatus.INTERNAL_SERVER_ERROR);
    return {};
  }
}
