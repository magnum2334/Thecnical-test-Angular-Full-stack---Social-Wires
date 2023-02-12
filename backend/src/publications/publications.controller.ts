/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {  PublicationsService } from './publications.service';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';

@Controller('publications')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}

  @Post()
  create(@Body() createPublicationDto: CreatePublicationDto) {
    return this.publicationsService.create(createPublicationDto);
  }
  @Get()
  findAll() {
    return this.publicationsService.findAll();
  }
  @Get('allPublication')
  allPublication() {
    return this.publicationsService.allPublication();
  }

  @Post('FilterPublication')
  FilterPublication(@Body() data: CreatePublicationDto ) {
    return this.publicationsService.FilterPublication(data);
  }
  
  @Post('userFilterPublication')
  userFilterPublication(@Body() data: CreatePublicationDto ) {
    return this.publicationsService.userFilterPublication(data);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publicationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePublicationDto: UpdatePublicationDto) {
    return this.publicationsService.update(+id, updatePublicationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publicationsService.remove(+id);
  }
}
