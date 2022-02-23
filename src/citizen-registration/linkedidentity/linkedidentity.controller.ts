import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LinkedidentityService } from './linkedidentity.service';
import { CreateLinkedidentityDto } from './dto/create-linkedidentity.dto';
import { UpdateLinkedidentityDto } from './dto/update-linkedidentity.dto';

@Controller('linkedidentity')
export class LinkedidentityController {
  constructor(private readonly linkedidentityService: LinkedidentityService) {}

  @Post()
  create(@Body() createLinkedidentityDto: CreateLinkedidentityDto) {
    return this.linkedidentityService.create(createLinkedidentityDto);
  }

  @Get()
  findAll() {
    return this.linkedidentityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.linkedidentityService.findOne(+id);
  }

  @Patch(':linkedidentity/biodatum/biodatumid')
  setUserById(@Param('linkedidentityId') linkedidentityId: number, @Param('biodatumId') biodatumId: number) {
    return this.linkedidentityService.setUserById(linkedidentityId, biodatumId);
    }

  @Delete(':linkedidentityid/biodata')
  unsetUserById(@Param('linkedidentityId') linkidentityId: number) {
    return this.linkedidentityService.unsetUserById(linkidentityId);
    }
  }

