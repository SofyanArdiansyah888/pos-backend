/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class DeleteMaterialInput {
  @Field()
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
