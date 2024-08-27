declare module "@google-cloud/storage" {
  export interface StorageOptions {
    keyFilename: string;
  }

  export class Storage {
    constructor(options: StorageOptions);
    bucket(name: string): Bucket;
  }

  export class Bucket {
    file(name: string): File;
  }

  export class File {
    download(): Promise<[Buffer]>;
  }
}
