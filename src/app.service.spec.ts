import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { MicrogenModule } from './microgen/microgen.module';
import { ConfigService } from '@nestjs/config';

describe('App Service', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService, ConfigService],
      imports: [
        MicrogenModule.register({
          apiKey: '74decc08-f895-4f11-aa6b-b694f038559a',
        }),
      ],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return hello world', async () => {
    expect(service.getHello()).toEqual('Hello World!');
  });
});
