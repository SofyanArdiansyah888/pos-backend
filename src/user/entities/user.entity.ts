import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';


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


export enum UserRole {
  ADMIN="ADMIN",
  CASHIER="CASHIER",
  KITCHEN="KITCHEN",
}

registerEnumType(UserRole,{
  name:'UserRole',
})
