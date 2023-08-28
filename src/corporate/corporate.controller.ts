import { Controller } from '@nestjs/common';
import { CorporateService } from './corporate.service';
import { CreateCorporateDto } from './dto/create-corporate.dto';
import { UpdateCorporateDto } from './dto/update-corporate.dto';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';

@Controller('corporate')
export class CorporateController {
  constructor(private readonly corporateService: CorporateService) {}

  @TypedRoute.Post()
  create(@TypedBody() createCorporateDto: CreateCorporateDto) {
    return this.corporateService.create(createCorporateDto);
  }

  @TypedRoute.Get()
  findAll() {
    return this.corporateService.findAll();
  }

  @TypedRoute.Get(':id')
  findOne(@TypedParam('id') id: string) {
    return this.corporateService.findOne(+id);
  }

  @TypedRoute.Patch(':id')
  update(
    @TypedParam('id') id: string,
    @TypedBody() updateCorporateDto: UpdateCorporateDto,
  ) {
    return this.corporateService.update(+id, updateCorporateDto);
  }

  @TypedRoute.Delete(':id')
  remove(@TypedParam('id') id: string) {
    return this.corporateService.remove(+id);
  }
}
