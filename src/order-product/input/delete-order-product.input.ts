import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class DeleteOrderProductInput {
  @Field()
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
