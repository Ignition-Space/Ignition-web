import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { ApiProperty } from '@nestjs/swagger';

export class CommonResponseDto {
  @ApiProperty({ description: '请求是否成功' })
  success: boolean;

  @ApiProperty({ description: '响应时间' })
  time: string;

  @ApiProperty({ description: '响应信息' })
  message: string;

  @ApiProperty({ description: '响应状态码' })
  code: number;
}

export const useSwaggerDocs = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('HuOS')
    .setDescription('低代码平台服务端')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api-docs', app, document);
};
