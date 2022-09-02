import { CreateTaxInput } from './create-tax.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class UpdateTaxInput extends PartialType(CreateTaxInput) {
  @Field()
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @Field()
  @IsNotEmpty()
  description: string;
}
