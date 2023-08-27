import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService],
    }).compile();

    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be create post', async () => {
    const result = await service.create({});

    expect(result).toEqual('This action adds a new post');
  });

  it('should be findAll', async () => {
    const result = await service.findAll();

    expect(result).toEqual('This action returns all posts');
  });

  it('should be findOne', async () => {
    const result = await service.findOne(1);

    expect(result).toEqual('This action returns a #1 post');
  });

  it('should update one', async () => {
    const result = await service.update(1, {});
    expect(result).toEqual('This action updates a #1 post');
  });

  it('should delete one', async () => {
    const result = await service.remove(1);
    expect(result).toEqual('This action removes a #1 post');
  });
});
