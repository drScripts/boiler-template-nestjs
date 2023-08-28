import { PartialType } from '@nestjs/mapped-types';
import { CreateCorporateSettingDto } from './create-corporate-setting.dto';

export class UpdateCorporateSettingDto extends PartialType(
  CreateCorporateSettingDto,
) {}
