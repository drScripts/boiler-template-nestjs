import { Controller } from '@nestjs/common';
import { TransactionHistoryService } from './transaction-history.service';
import { CreateTransactionHistoryDto } from './dto/create-transaction-history.dto';
import { UpdateTransactionHistoryDto } from './dto/update-transaction-history.dto';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';

@Controller('transaction-history')
export class TransactionHistoryController {
  constructor(
    private readonly transactionHistoryService: TransactionHistoryService,
  ) {}

  @TypedRoute.Post()
  create(
    @TypedBody() createTransactionHistoryDto: CreateTransactionHistoryDto,
  ) {
    return this.transactionHistoryService.create(createTransactionHistoryDto);
  }

  @TypedRoute.Get()
  findAll() {
    return this.transactionHistoryService.findAll();
  }

  @TypedRoute.Get(':id')
  findOne(@TypedParam('id') id: string) {
    return this.transactionHistoryService.findOne(+id);
  }

  @TypedRoute.Patch(':id')
  update(
    @TypedParam('id') id: string,
    @TypedBody() updateTransactionHistoryDto: UpdateTransactionHistoryDto,
  ) {
    return this.transactionHistoryService.update(
      +id,
      updateTransactionHistoryDto,
    );
  }

  @TypedRoute.Delete(':id')
  remove(@TypedParam('id') id: string) {
    return this.transactionHistoryService.remove(+id);
  }
}
