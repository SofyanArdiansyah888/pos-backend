import { Field, InputType } from '@nestjs/graphql';
import { MaterialType } from '@prisma/client';
import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';

@InputType()
export class CreateMaterialInput {
  @Field()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  minimalStock: number;

  @Field()
  @IsNotEmpty()
  code: string;

  @Field()
  @IsNotEmpty()
  type: MaterialType;
}
