import { Controller } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @TypedRoute.Post()
  create(@TypedBody() createWalletDto: CreateWalletDto) {
    return this.walletService.create(createWalletDto);
  }

  @TypedRoute.Get()
  findAll() {
    return this.walletService.findAll();
  }

  @TypedRoute.Get(':id')
  findOne(@TypedParam('id') id: string) {
    return this.walletService.findOne(+id);
  }

  @TypedRoute.Patch(':id')
  update(
    @TypedParam('id') id: string,
    @TypedBody() updateWalletDto: UpdateWalletDto,
  ) {
    return this.walletService.update(+id, updateWalletDto);
  }

  @TypedRoute.Delete(':id')
  remove(@TypedParam('id') id: string) {
    return this.walletService.remove(+id);
  }
}
