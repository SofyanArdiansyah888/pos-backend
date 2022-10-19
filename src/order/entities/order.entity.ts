import { ObjectType, Field, Int } from '@nestjs/graphql';
import { OrderProductEntity } from '../../order-product/entities/order-product.entity';
// import { ClientEntity } from '../../client/entities/client.entity';

@ObjectType()
export class OrderEntity {
  @Field(() => Int)
  id: number;

  // @Field(() => ClientEntity, { nullable: true })
  // client: ClientEntity;

  @Field()
  orderNumber: string;

  @Field()
  totalItem: number;

  @Field()
  totalPayment: number;

  @Field(() => [OrderProductEntity], { nullable: true })
  orderProduct: [OrderProductEntity];

  @Field()
  createdAt: Date;

  @Field()
  updateddAt: Date;
}
