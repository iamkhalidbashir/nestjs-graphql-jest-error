import { Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';
import { AppStatusDto } from './status.dto';

@Resolver(() => AppStatusDto)
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => AppStatusDto)
  getStatus(): AppStatusDto {
    return this.appService.getStatus();
  }
}
