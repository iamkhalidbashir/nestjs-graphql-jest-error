import { Field, ObjectType } from '@nestjs/graphql';
import { GroupDto } from './Group.dto';

@ObjectType()
export class MemberDto {
  @Field()
  name: string;

  @Field(() => [GroupDto])
  groups: GroupDto[];
}
