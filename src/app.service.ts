import { Injectable } from '@nestjs/common';
import { GroupDto } from './Group.dto';
import { MemberDto } from './Member.dto';

@Injectable()
export class AppService {
  getGroups(): GroupDto[] {
    return [];
  }
  getMembers(): MemberDto[] {
    return [];
  }
}
