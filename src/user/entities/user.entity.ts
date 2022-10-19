import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';

@ObjectType()
export class UserEntity {
  @Field(() => Int)
  id: number;

  @Field()
  email: string;

  @Field({ nullable: true })
  name: string;

  @Field()
  password: string;

  @Field()
  role: UserRole;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}

export enum UserRole {
  ADMIN = 'ADMIN',
  CASHIER = 'CASHIER',
  WAREHOUSE = 'WAREHOUSE',
}

registerEnumType(UserRole, {
  name: 'UserRole',
});
