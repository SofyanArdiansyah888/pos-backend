import { CreateTableInput } from './create-table.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';

@InputType()
export class UpdateTableInput extends PartialType(CreateTableInput) {
  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @Field()
  @IsNotEmpty()
  @MinLength(3)
  name: string;
}
