import { Controller } from '@nestjs/common';
import { CallbackHistoryService } from './callback-history.service';
import { CreateCallbackHistoryDto } from './dto/create-callback-history.dto';
import { UpdateCallbackHistoryDto } from './dto/update-callback-history.dto';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';

@Controller('callback-history')
export class CallbackHistoryController {
  constructor(
    private readonly callbackHistoryService: CallbackHistoryService,
  ) {}

  @TypedRoute.Post()
  create(@TypedBody() createCallbackHistoryDto: CreateCallbackHistoryDto) {
    return this.callbackHistoryService.create(createCallbackHistoryDto);
  }

  @TypedRoute.Get()
  findAll() {
    return this.callbackHistoryService.findAll();
  }

  @TypedRoute.Get(':id')
  findOne(@TypedParam('id') id: string) {
    return this.callbackHistoryService.findOne(+id);
  }

  @TypedRoute.Patch(':id')
  update(
    @TypedParam('id') id: string,
    @TypedBody() updateCallbackHistoryDto: UpdateCallbackHistoryDto,
  ) {
    return this.callbackHistoryService.update(+id, updateCallbackHistoryDto);
  }

  @TypedRoute.Delete(':id')
  remove(@TypedParam('id') id: string) {
    return this.callbackHistoryService.remove(+id);
  }
}
