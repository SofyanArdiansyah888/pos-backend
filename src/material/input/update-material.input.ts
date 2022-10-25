import { CreateMaterialInput } from './create-material.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';
import { MaterialType } from '@prisma/client';

@InputType()
export class UpdateMaterialInput extends PartialType(CreateMaterialInput) {
  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @Field()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @Field()
  code: string;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  minimalStock: number;

  @Field()
  @IsNotEmpty()
  type: MaterialType;
}
