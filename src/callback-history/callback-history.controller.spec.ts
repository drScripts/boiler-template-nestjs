import { Test, TestingModule } from '@nestjs/testing';
import { CallbackHistoryController } from './callback-history.controller';
import { CallbackHistoryService } from './callback-history.service';

describe('CallbackHistoryController', () => {
  let controller: CallbackHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CallbackHistoryController],
      providers: [CallbackHistoryService],
    }).compile();

    controller = module.get<CallbackHistoryController>(
      CallbackHistoryController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
