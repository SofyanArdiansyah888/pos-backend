import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { TableReserVation } from '@prisma/client';
import { OrderEntity } from '../../order/entities/order.entity';

@ObjectType()
export class TableEntity {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  status: StatusTable;

  @Field(() => OrderEntity, { nullable: true })
  order?: OrderEntity;

  // @Field()
  // tableReservation?: TableReserVation[];

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}
export enum StatusTable {
  OPEN = 'OPEN',
  ORDERED = 'ORDERED',
  RESERVED = 'RESERVED',
  CLOSED = 'CLOSED',
}

registerEnumType(StatusTable, {
  name: 'StatusTable',
});
