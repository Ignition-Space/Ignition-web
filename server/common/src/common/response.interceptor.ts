import {
  Injectable,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // 请求类型
    const type = context.getType();

    return next.handle().pipe(
      map((data) => {
        return {
          data,
          success: true,
          message: '请求成功',
          type: type.toLocaleUpperCase(),
        };
      }),
    );
  }
}
