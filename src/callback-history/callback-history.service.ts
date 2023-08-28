import { Injectable } from '@nestjs/common';
import { CreateCallbackHistoryDto } from './dto/create-callback-history.dto';
import { UpdateCallbackHistoryDto } from './dto/update-callback-history.dto';

@Injectable()
export class CallbackHistoryService {
  create(createCallbackHistoryDto: CreateCallbackHistoryDto) {
    return 'This action adds a new callbackHistory';
  }

  findAll() {
    return `This action returns all callbackHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} callbackHistory`;
  }

  update(id: number, updateCallbackHistoryDto: UpdateCallbackHistoryDto) {
    return `This action updates a #${id} callbackHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} callbackHistory`;
  }
}
