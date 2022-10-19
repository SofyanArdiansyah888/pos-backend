/* eslint-disable prettier/prettier */
import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class DeleteCustomerInput {
  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
