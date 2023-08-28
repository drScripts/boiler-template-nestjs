import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { MicrogenModule } from '../microgen/microgen.module';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
      imports: [
        MicrogenModule.register({
          apiKey: '74decc08-f895-4f11-aa6b-b694f038559a',
          global: true,
        }),
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should findAll users', async () => {
    const users = await service.findAll();
    expect(users).toEqual('This action returns all users');
  });
});
