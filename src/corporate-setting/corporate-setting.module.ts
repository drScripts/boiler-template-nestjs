import { Module } from '@nestjs/common';
import { CorporateSettingService } from './corporate-setting.service';
import { CorporateSettingController } from './corporate-setting.controller';

@Module({
  controllers: [CorporateSettingController],
  providers: [CorporateSettingService],
  imports: [],
})
export class CorporateSettingModule {}
