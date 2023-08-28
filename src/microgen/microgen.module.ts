import { DynamicModule, Module } from '@nestjs/common';
import { MICROGEN_CONFIG_OPTIONS, MicrogenOptions } from '../lib';
import { MicrogenService } from './microgen.service';

@Module({})
export class MicrogenModule {
  static register(config: MicrogenOptions): DynamicModule {
    return {
      module: MicrogenModule,
      providers: [
        {
          provide: MICROGEN_CONFIG_OPTIONS,
          useValue: config,
        },
        MicrogenService,
      ],
      global: config.global || false,
      exports: [MicrogenService],
    };
  }
}
