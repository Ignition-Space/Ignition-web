import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
// 接口异常拦截器
export class HttpCacheFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception?.getStatus ? exception?.getStatus() : 500;

    response.status(status).json({
      success: false,
      time: new Date(),
      message: exception.message,
      code: status,
    });
  }
}
