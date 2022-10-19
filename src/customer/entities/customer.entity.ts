import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';

@ObjectType()
export class CustomerEntity {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  phone: string;

  @Field({ nullable: true })
  name: string;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}
