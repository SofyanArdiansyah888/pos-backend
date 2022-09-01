import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ClientEntity {
  @Field(() => Int, { description: 'Id Client' })
  id: number;

  @Field()
  email: string

  @Field()
  name: string

  @Field()
  phone: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
