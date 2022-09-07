import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field()
  @IsNotEmpty()
  @MinLength(2)
  name:string

  @Field()
  category:string

  @Field()
  brand:string
  
  @Field()
  @IsNotEmpty()
  photo:string
   
  @Field()
  @IsNotEmpty()
  favourite:boolean

  @Field()
  @IsNotEmpty()
  @IsNumber()
  price:number

  @Field()
  @IsNotEmpty()
  @IsNumber()
  stock:number

  @Field()
  @IsNotEmpty()
  @IsNumber()
  capital:number

  @Field()
  code:string

  @Field()
  @IsNotEmpty()
  isStock:boolean

  @Field()
  @IsNotEmpty()
  @IsNumber()
  minimalStock:number

  @Field()
  @IsNotEmpty()
  uom:string

}