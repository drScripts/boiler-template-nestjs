import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LokiLogger } from 'nestjs-loki-logger';

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService) { }

  private readonly lokiLogger = new LokiLogger(AppController.name);

  @Get('/liveness')
  liveness(): string {
    this.lokiLogger.debug("HAIII GAESS")
    return 'ok';
  }

  @Get()
  index(): string {
    return `index ${this.configService.get<string>('JAEGER_SERVICE_HOST')}`;
  }
}
