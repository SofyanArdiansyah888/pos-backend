import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserRole } from '@prisma/client';

@ObjectType()
export class UserEntity {
  @Field(() => Int, { description: 'Id Client' })
  id: number;

  @Field()
  email: string

  @Field()
  name: string

  @Field()
  password: string

  @Field()
  role: UserRole

  @Field()
  createdAt?:Date

  @Field()
  updatedAt?:Date
}
