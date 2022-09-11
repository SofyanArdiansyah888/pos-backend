import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class AuthToken {
  @Field(() => String)
  access_token: string;
}
