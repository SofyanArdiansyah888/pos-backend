import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreateOrderProductInput {
  @Field(() => Int) 
  productId: number;

  
  @Field(() => Int,{nullable:true})
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
