import { Publication } from 'src/publications/entities/publication.entity';
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { PublicationsController } from './publications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Publication])],
  controllers: [PublicationsController],
  providers: [PublicationsService]
})
export class PublicationsModule {}
