import { Test, TestingModule } from '@nestjs/testing';
import { CorporateSettingService } from './corporate-setting.service';

describe('CorporateSettingService', () => {
  let service: CorporateSettingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CorporateSettingService],
    }).compile();

    service = module.get<CorporateSettingService>(CorporateSettingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
