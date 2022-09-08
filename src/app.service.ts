import { Injectable } from '@nestjs/common';
import { AppStatusDto } from './status.dto';

@Injectable()
export class AppService {
  getStatus(): AppStatusDto {
    return { status: 'ok' };
  }
}
