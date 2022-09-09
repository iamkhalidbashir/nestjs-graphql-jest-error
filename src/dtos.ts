import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AdminDto {
  @Field()
  adminName: string;
}

@ObjectType()
export class GroupDto {
  @Field()
  groupName: string;

  // @Field(() => String) // This Passes test:e2e with globalSetup
  @Field(() => AdminDto) // This Fails test:e2e with globalSetup
  admin: AdminDto;
}
