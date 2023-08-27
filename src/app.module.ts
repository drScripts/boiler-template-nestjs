import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LoggerMiddleware } from './lib/middleware/logger.middleware';
import { AuthMiddleware } from './lib/middleware/auth.middleware';
import { RoleMiddleware } from './lib/middleware/role.middleware';
import { LokiLoggerModule } from 'nestjs-loki-logger';
import { PrometheusModule, makeCounterProvider, makeGaugeProvider } from "@willsoto/nestjs-prometheus";
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PostsModule,
    ClientsModule.registerAsync([
      {
        name: 'RABBITMQ_SERVICE',
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => {
          return {
            transport: Transport.RMQ,
            options: {
              urls: [configService.get<string>("RABBITMQ_URL") || ""],
              queue: configService.get<string>("RABBITMQ_QUEUE") || 'nestJs',
              queueOptions: {
                durable: true,
              },
            },
          }
        },
      },
    ]),
    LokiLoggerModule.forRootAsync({
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        return {
          lokiUrl: configService.get<string>("LOKI_URL") || ':3100',   // loki server
          labels: {
            'label': configService.get<string>("LOKI_LABEL") ||'sampleNestJS',     // app level labels, these labels will be attached to every log in the application
          },
          logToConsole: false,
          gzip: false // contentEncoding support gzip or not
        }
      },
    }),
    PrometheusModule.register({
      defaultMetrics: {
        enabled: true
      },
      defaultLabels: false,
    })
  ],
  controllers: [AppController],
  providers: [
    AppService,
    makeCounterProvider({
      help: "takeme_v2_api_success",
      name: "takeme_v2_api_success",
      labelNames: ['method', 'routes', 'status', 'req_body', 'response']
    }),
    makeCounterProvider({
      help: "takeme_v2_api_error",
      name: "takeme_v2_api_error",
      labelNames: ['method', 'routes', 'status', 'req_body', 'response']
    }),
    makeGaugeProvider({
      help: "takeme_v2_api_gauge",
      name: "takeme_v2_api_gauge",
      labelNames: ['method', 'routes', 'status', 'req_body', 'response']
    }),
    makeGaugeProvider({
      help: "takeme_v2_api_gauge_error",
      name: "takeme_v2_api_gauge_error",
      labelNames: ['method', 'routes', 'status', 'req_body', 'response']
    }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(AppController);
    consumer.apply(AuthMiddleware).forRoutes(AppController);
    consumer.apply(RoleMiddleware).forRoutes(AppController);
  }
}
