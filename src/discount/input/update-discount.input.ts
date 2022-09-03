import { CreateDiscountInput } from './create-discount.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { PriceRole } from '@prisma/client';

@InputType()
export class UpdateDiscountInput extends PartialType(CreateDiscountInput) {
  @Field()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @Field()
  @IsNotEmpty()
  discountType:PriceRole

  @Field()
  @IsNotEmpty()
  amount: number;

  @Field()
  @IsNotEmpty()
  description: string;
}
