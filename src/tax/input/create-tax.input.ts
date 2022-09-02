import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreateTaxInput {
  @Field()
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @Field()
  @IsNotEmpty()
  description: string;
}
