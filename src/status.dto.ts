import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AppStatusDto {
  @Field()
  status: string;
}
