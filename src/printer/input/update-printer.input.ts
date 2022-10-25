import { CreatePrinterInput } from './create-printer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';

@InputType()
export class UpdatePrinterInput extends PartialType(CreatePrinterInput) {
  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @Field()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @Field()
  @IsNotEmpty()
  @MinLength(3)
  description: string;

  @Field()
  @IsNotEmpty()
  @MinLength(3)
  ipAddress: string;
}
