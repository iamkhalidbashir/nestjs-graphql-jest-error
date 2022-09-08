import { Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';
import { GroupDto } from './Group.dto';
import { MemberDto } from './Member.dto';

@Resolver(() => GroupDto)
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => [MemberDto])
  getMembers(): MemberDto[] {
    return this.appService.getMembers();
  }

  @Query(() => [GroupDto])
  getGroups(): GroupDto[] {
    return this.appService.getGroups();
  }
}
