import { Controller } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @TypedRoute.Post()
  create(@TypedBody() createAddressDto: CreateAddressDto) {
    return this.addressService.create(createAddressDto);
  }

  @TypedRoute.Get()
  findAll() {
    return this.addressService.findAll();
  }

  @TypedRoute.Get(':id')
  findOne(@TypedParam('id') id: string) {
    return this.addressService.findOne(+id);
  }

  @TypedRoute.Patch(':id')
  update(
    @TypedParam('id') id: string,
    @TypedBody() updateAddressDto: UpdateAddressDto,
  ) {
    return this.addressService.update(+id, updateAddressDto);
  }

  @TypedRoute.Delete(':id')
  remove(@TypedParam('id') id: string) {
    return this.addressService.remove(+id);
  }
}
