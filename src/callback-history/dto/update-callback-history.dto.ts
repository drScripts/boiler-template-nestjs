import { PartialType } from '@nestjs/mapped-types';
import { CreateCallbackHistoryDto } from './create-callback-history.dto';

export class UpdateCallbackHistoryDto extends PartialType(
  CreateCallbackHistoryDto,
) {}
