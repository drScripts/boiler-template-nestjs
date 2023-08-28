import { ModuleMetadata } from '@nestjs/common';
import { MicrogenClientOptions } from 'microgen-v3-sdk';

export interface MicrogenOptions extends MicrogenClientOptions {
  global?: boolean;
}

export interface MicrogenAsyncOptions
  extends MicrogenClientOptions,
    Pick<ModuleMetadata, 'imports'> {
  useFactory?: (...args: any[]) => Promise<MicrogenOptions> | MicrogenOptions;
  inject?: any[];
}

export interface Attachment {
  fileName: string;
  url: string;
}
