import { Injectable } from '@nestjs/common';
import { CreateCorporateSettingDto } from './dto/create-corporate-setting.dto';
import { UpdateCorporateSettingDto } from './dto/update-corporate-setting.dto';

@Injectable()
export class CorporateSettingService {
  create(createCorporateSettingDto: CreateCorporateSettingDto) {
    return 'This action adds a new corporateSetting';
  }

  findAll() {
    return `This action returns all corporateSetting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} corporateSetting`;
  }

  update(id: number, updateCorporateSettingDto: UpdateCorporateSettingDto) {
    return `This action updates a #${id} corporateSetting`;
  }

  remove(id: number) {
    return `This action removes a #${id} corporateSetting`;
  }
}
