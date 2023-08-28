import { Inject, Injectable } from '@nestjs/common';
import { MicrogenClient } from 'microgen-v3-sdk';
import { MICROGEN_CONFIG_OPTIONS, MicrogenOptions } from '../lib';

@Injectable()
export class MicrogenService {
  private _client: MicrogenClient;

  constructor(@Inject(MICROGEN_CONFIG_OPTIONS) config: MicrogenOptions) {
    this._client = new MicrogenClient({
      apiKey: config.apiKey,
      host: config.host,
      isSecure: config.isSecure,
      queryUrl: config.queryUrl,
      streamUrl: config.streamUrl,
    });
  }

  public get client(): MicrogenClient {
    return this._client;
  }

  public setAuth(token: string) {
    this._client.auth.saveToken(token);
  }
}
