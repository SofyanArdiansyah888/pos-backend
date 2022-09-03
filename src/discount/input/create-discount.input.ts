import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { PriceRole } from '@prisma/client';

@InputType()
export class CreateDiscountInput {

  @Field()
  @IsNotEmpty()
  discountType:PriceRole

  @Field()
  @IsNotEmpty()
  @IsNumber()
  amount:number


  @Field()
  @IsNotEmpty()
  description:string

}
