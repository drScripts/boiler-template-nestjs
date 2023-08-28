import { Module } from '@nestjs/common';
import { CallbackHistoryService } from './callback-history.service';
import { CallbackHistoryController } from './callback-history.controller';

@Module({
  controllers: [CallbackHistoryController],
  providers: [CallbackHistoryService],
  imports: [],
})
export class CallbackHistoryModule {}
