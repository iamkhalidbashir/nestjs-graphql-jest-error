import { Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';
import { GroupDto, AdminDto } from './dtos';

@Resolver(() => GroupDto)
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => [AdminDto])
  getAdmins(): AdminDto[] {
    return this.appService.getAdmins();
  }

  @Query(() => [GroupDto])
  getGroups(): GroupDto[] {
    return this.appService.getGroups();
  }
}
