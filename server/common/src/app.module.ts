import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectEntity } from './entitys/project.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      // 异步获取的好处是可以加密本地密码。在这里换解密后的密码。
      useFactory: () => ({
        type: 'mysql',
        host: 'mysql.sqlpub.com',
        port: 3306,
        username: 'wangly19',
        password: '6JOvuZUpuqtvemcR',
        database: 'lowcode_test_2',
        entities: [ProjectEntity],
        synchronize: true,
      }),
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
