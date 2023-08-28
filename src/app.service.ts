import { Injectable } from '@nestjs/common';
import { MicrogenService } from './microgen/microgen.service';

@Injectable()
export class AppService {
  constructor(private readonly microgenService: MicrogenService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getProducts(): Promise<number | undefined> {
    return (await this.microgenService.client.service('posts').count()).data
      ?.count;
  }
}
