import { Test, TestingModule } from '@nestjs/testing';
import { CallbackHistoryService } from './callback-history.service';

describe('CallbackHistoryService', () => {
  let service: CallbackHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CallbackHistoryService],
    }).compile();

    service = module.get<CallbackHistoryService>(CallbackHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
