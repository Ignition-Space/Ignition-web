import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useSwaggerDocs } from './common/swagger';
import { ResponseInterceptor } from './common/response.interceptor';
import { HttpCacheFilter } from './common/http-catch.filter';
import { RequestMethod, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  // 拦截器与过滤器
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new HttpCacheFilter());

  // 接口版本管理
  app.enableVersioning({
    type: VersioningType.URI,
  });

  // 接口prefix解析
  app.setGlobalPrefix('/api', {
    exclude: [{ path: 'health', method: RequestMethod.GET }],
  });

  // 注册swagger
  useSwaggerDocs(app);

  await app.listen(7274, () => {
    console.log('服务启动 -> ', 'http://localhost:7274/');
  });
}

bootstrap();
