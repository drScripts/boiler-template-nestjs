import { Controller } from '@nestjs/common';
import { PaymentGatewayService } from './payment-gateway.service';
import { CreatePaymentGatewayDto } from './dto/create-payment-gateway.dto';
import { UpdatePaymentGatewayDto } from './dto/update-payment-gateway.dto';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';

@Controller('payment-gateway')
export class PaymentGatewayController {
  constructor(private readonly paymentGatewayService: PaymentGatewayService) {}

  @TypedRoute.Post()
  create(@TypedBody() createPaymentGatewayDto: CreatePaymentGatewayDto) {
    return this.paymentGatewayService.create(createPaymentGatewayDto);
  }

  @TypedRoute.Get()
  findAll() {
    return this.paymentGatewayService.findAll();
  }

  @TypedRoute.Get(':id')
  findOne(@TypedParam('id') id: string) {
    return this.paymentGatewayService.findOne(+id);
  }

  @TypedRoute.Patch(':id')
  update(
    @TypedParam('id') id: string,
    @TypedBody() updatePaymentGatewayDto: UpdatePaymentGatewayDto,
  ) {
    return this.paymentGatewayService.update(+id, updatePaymentGatewayDto);
  }

  @TypedRoute.Delete(':id')
  remove(@TypedParam('id') id: string) {
    return this.paymentGatewayService.remove(+id);
  }
}
