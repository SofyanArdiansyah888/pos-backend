import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class CreateUomInput {
  @Field()
  @IsNotEmpty()
  @MinLength(1)
  name:string
}
