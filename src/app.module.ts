import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostagemModule } from './postagem/postagem.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3360,
      username: 'root',
      password: 'root',
      database: 'db_blogpessoal',
      entities: [],
      synchronize: true,
      logging: true,
    }),
    PostagemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
