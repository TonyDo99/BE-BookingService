import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
export declare class ExcludeFieldUser implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): import("rxjs").Observable<Record<string, any>>;
}
