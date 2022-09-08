import { Field, ObjectType } from '@nestjs/graphql';
import { MemberDto } from './Member.dto';

@ObjectType()
export class GroupDto {
  @Field()
  name: string;

  @Field(() => [MemberDto])
  members: MemberDto[];
}
