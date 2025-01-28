import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './entities/postagem.entity';
import { TemaModule } from '../temas/tema.module';
import { PostagemController } from './controllers/postagem.controller';
import { PostagemService } from './service/postagem.service';


@Module({
  imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
  controllers: [PostagemController],
  providers: [PostagemService],
  exports: [TypeOrmModule],
})
export class PostagemModule {}