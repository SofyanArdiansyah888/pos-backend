import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class CreatePrinterInput {
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
