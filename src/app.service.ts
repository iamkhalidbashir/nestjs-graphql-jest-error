import { Injectable } from '@nestjs/common';
import { GroupDto, AdminDto } from './dtos';

@Injectable()
export class AppService {
  getGroups(): GroupDto[] {
    return [];
  }
  getAdmins(): AdminDto[] {
    return [];
  }
}
