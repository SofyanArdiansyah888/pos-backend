import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class DeleteTaxInput {
  @Field()
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
