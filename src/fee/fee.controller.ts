import { Controller } from '@nestjs/common';
import { FeeService } from './fee.service';
import { CreateFeeDto } from './dto/create-fee.dto';
import { UpdateFeeDto } from './dto/update-fee.dto';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';

@Controller('fee')
export class FeeController {
  constructor(private readonly feeService: FeeService) {}

  @TypedRoute.Post()
  create(@TypedBody() createFeeDto: CreateFeeDto) {
    return this.feeService.create(createFeeDto);
  }

  @TypedRoute.Get()
  findAll() {
    return this.feeService.findAll();
  }

  @TypedRoute.Get(':id')
  findOne(@TypedParam('id') id: string) {
    return this.feeService.findOne(+id);
  }

  @TypedRoute.Patch(':id')
  update(
    @TypedParam('id') id: string,
    @TypedBody() updateFeeDto: UpdateFeeDto,
  ) {
    return this.feeService.update(+id, updateFeeDto);
  }

  @TypedRoute.Delete(':id')
  remove(@TypedParam('id') id: string) {
    return this.feeService.remove(+id);
  }
}
