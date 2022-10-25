import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PrinterEntity {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  ipAddress: string;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}
