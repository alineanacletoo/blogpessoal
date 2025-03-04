import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tema } from './entities/tema.entity';
import { TemaController } from './controllers/tema.controller';
import { TemaService } from './service/tema,service';


@Module({
  imports: [TypeOrmModule.forFeature([Tema])],
  controllers: [TemaController],
  providers: [TemaService],
  exports: [TypeOrmModule, TemaService],
})
export class TemaModule {}