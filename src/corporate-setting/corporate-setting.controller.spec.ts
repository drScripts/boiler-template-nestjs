import { Test, TestingModule } from '@nestjs/testing';
import { CorporateSettingController } from './corporate-setting.controller';
import { CorporateSettingService } from './corporate-setting.service';

describe('CorporateSettingController', () => {
  let controller: CorporateSettingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CorporateSettingController],
      providers: [CorporateSettingService],
    }).compile();

    controller = module.get<CorporateSettingController>(
      CorporateSettingController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
