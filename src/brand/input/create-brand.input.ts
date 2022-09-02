import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateBrandInput {
  @Field()
  @IsNotEmpty()
  name:string
}
