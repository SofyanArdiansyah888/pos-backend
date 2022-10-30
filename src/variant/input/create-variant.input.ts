import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreateVariantInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @Field({ nullable: true })
  variantCode: string;
}
