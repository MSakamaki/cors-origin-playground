import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IncomingMessage, ServerResponse } from 'http';

export interface Response<T> {
  data: T;
}

@Injectable()
export class AppInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<Response<T>> {
    const request: IncomingMessage = context.switchToHttp().getRequest();
    const response: ServerResponse = context.switchToHttp().getResponse();

    console.log('AppInterceptor', request.method);
    return next.handle().pipe(map(data => ({ data })));
  }
}
