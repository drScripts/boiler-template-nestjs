import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('PostsService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
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
