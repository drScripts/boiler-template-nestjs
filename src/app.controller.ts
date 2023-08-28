import { Controller } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LokiLogger } from 'nestjs-loki-logger';
import { TypedRoute } from '@nestia/core';

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  private readonly lokiLogger = new LokiLogger(AppController.name);

  @TypedRoute.Get('/liveness')
  liveness(): string {
    this.lokiLogger.debug('HAIII GAESS');
    return 'ok';
  }

  @TypedRoute.Get()
  index(): string {
    return `index ${this.configService.get<string>('JAEGER_SERVICE_HOST')}`;
  }
}
