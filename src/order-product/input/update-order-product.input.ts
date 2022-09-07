import { CreateOrderProductInput } from './create-order-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class UpdateOrderProductInput extends PartialType(CreateOrderProductInput) {
  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  productId: number;

  
  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  orderId: number;

  
  @Field()
  @IsNotEmpty()
  orderNumber: string;

  @Field()
  @IsNotEmpty()
  productName: string;

  @Field()
  variantName: string;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @Field()
  @IsNotEmpty()
  uom: string;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  price: number;
}
