import { CreateBrandInput } from './create-brand.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class UpdateBrandInput extends PartialType(CreateBrandInput) {
  @Field()
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @Field()
  @IsNotEmpty()
  name: string;
}
