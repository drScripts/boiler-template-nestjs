import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import tracer from './lib/tracers/tracer';
import openTelemetryPlugin from '@autotelic/fastify-opentelemetry';
import { ConfigService } from '@nestjs/config';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  tracer.start();
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
    }),
    {
      rawBody: true,
    },
  );
  app.setGlobalPrefix('api');

  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI,
  });

  const configService = app.get(ConfigService);

  await app.register(openTelemetryPlugin, { wrapRoutes: true });

  await app.listen(
    configService.get<number>('PORT') || 3000,
    configService.get<string>('HOST') || 'localhost',
  );
}

bootstrap();
