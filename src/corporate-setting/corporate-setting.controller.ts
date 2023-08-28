import { Controller } from '@nestjs/common';
import { CorporateSettingService } from './corporate-setting.service';
import { CreateCorporateSettingDto } from './dto/create-corporate-setting.dto';
import { UpdateCorporateSettingDto } from './dto/update-corporate-setting.dto';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';

@Controller('corporate-setting')
export class CorporateSettingController {
  constructor(
    private readonly corporateSettingService: CorporateSettingService,
  ) {}

  @TypedRoute.Post()
  create(@TypedBody() createCorporateSettingDto: CreateCorporateSettingDto) {
    return this.corporateSettingService.create(createCorporateSettingDto);
  }

  @TypedRoute.Get()
  findAll() {
    return this.corporateSettingService.findAll();
  }

  @TypedRoute.Get(':id')
  findOne(@TypedParam('id') id: string) {
    return this.corporateSettingService.findOne(+id);
  }

  @TypedRoute.Patch(':id')
  update(
    @TypedParam('id') id: string,
    @TypedBody() updateCorporateSettingDto: UpdateCorporateSettingDto,
  ) {
    return this.corporateSettingService.update(+id, updateCorporateSettingDto);
  }

  @TypedRoute.Delete(':id')
  remove(@TypedParam('id') id: string) {
    return this.corporateSettingService.remove(+id);
  }
}
