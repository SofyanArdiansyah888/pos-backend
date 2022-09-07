import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateOrderProductInput } from '../../order-product/input/create-order-product.input';

@InputType()
export class CreateOrderInput {
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

  @Field(() => [CreateOrderProductInput],{nullable:true})
  @IsNotEmpty()
  @IsArray()
  orderProduct: [CreateOrderProductInput];
}
