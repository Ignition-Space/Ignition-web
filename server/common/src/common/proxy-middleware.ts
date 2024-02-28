import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

@Injectable()
export class ProxyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    createProxyMiddleware({
      target: req.headers['x-proxy-target'], // 使用请求头中的 x-proxy-target 作为代理的目标地址
      changeOrigin: true,
    } as any)(req, res, next);
  }
}
