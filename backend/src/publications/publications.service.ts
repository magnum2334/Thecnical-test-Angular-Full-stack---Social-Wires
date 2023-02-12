/* eslint-disable prettier/prettier */
import { Publication } from 'src/publications/entities/publication.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';

export interface Filter {
  date: string;
  tilte: string;
}

@Injectable()
export class PublicationsService {
  constructor(
    @InjectRepository(Publication)
    private publicationRepository: Repository<Publication>,
  ) {}

  async create(body: CreatePublicationDto) {
    const { tilte, content, user, createdAt } = body;
    const publication = new Publication();
    publication.tilte = tilte;
    publication.content = content;
    publication.user = user;
    publication.createdAt = createdAt;
    return await this.publicationRepository.save(publication);
  }

  allPublication() {
    const mes = this.publicationRepository.find({
      relations: {
        user: true,
      },
    });
    return mes;
  }

  FilterPublication(data: Publication) {
    const mes = this.publicationRepository.find({ 
      relations: {
        user: true,
      },
      where: { 
          tilte: Like(`%${data.tilte}%`),
          createdAt: Like(`%${data.createdAt}%`) 
          }
      })
    return mes;
  }
  userFilterPublication(data: Publication) {
    const mes = this.publicationRepository.find({ 
      relations: {
        user: true,
      },
      where: { createdAt: Like(`%${data.createdAt}%`) 
    } })
    return mes;
  }
  findAll() {
    return `This action returns all publications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} publication`;
  }

  update(id: number, updatePublicationDto: UpdatePublicationDto) {
    return `This action updates a #${id} publication`;
  }

  remove(id: number) {
    return `This action removes a #${id} publication`;
  }
}
