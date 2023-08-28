import { Controller } from '@nestjs/common';
import { OtpService } from './otp.service';
import { CreateOtpDto } from './dto/create-otp.dto';
import { UpdateOtpDto } from './dto/update-otp.dto';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';

@Controller('otp')
export class OtpController {
  constructor(private readonly otpService: OtpService) {}

  @TypedRoute.Post()
  create(@TypedBody() createOtpDto: CreateOtpDto) {
    return this.otpService.create(createOtpDto);
  }

  @TypedRoute.Get()
  findAll() {
    return this.otpService.findAll();
  }

  @TypedRoute.Get(':id')
  findOne(@TypedParam('id') id: string) {
    return this.otpService.findOne(+id);
  }

  @TypedRoute.Patch(':id')
  update(
    @TypedParam('id') id: string,
    @TypedBody() updateOtpDto: UpdateOtpDto,
  ) {
    return this.otpService.update(+id, updateOtpDto);
  }

  @TypedRoute.Delete(':id')
  remove(@TypedParam('id') id: string) {
    return this.otpService.remove(+id);
  }
}
