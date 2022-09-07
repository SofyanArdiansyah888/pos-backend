import { CreateOrderInput } from './create-order.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { OrderProductEntity } from '../../order-product/entities/order-product.entity';
import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';
import { UpdateOrderProductInput } from '../../order-product/input/update-order-product.input';

@InputType()
export class UpdateOrderInput extends PartialType(CreateOrderInput) {
  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @Field()
  @IsNumber()
  clientId: number;

  @Field()
  orderNumber: string;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  totalItem: number;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  totalPayment: number;

  @Field(() => [UpdateOrderProductInput],{nullable:true})
  @IsNotEmpty()
  @IsArray()
  orderProduct: [UpdateOrderProductInput];
}
