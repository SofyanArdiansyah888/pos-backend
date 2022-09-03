import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Variant } from '@prisma/client';
import internal from 'stream';

@ObjectType()
export class ProductEntity {
  @Field(() => Int)
  id: number;

  @Field()
  variant?:Variant[]

  @Field()
  productNumber:string

  @Field()
  name:string

  @Field()
  category:string

  @Field()
  brand:string
  
  @Field()
  photo:string
   
  @Field()
  favourite:boolean

  @Field()
  price:number

  @Field()
  capital:number

  @Field()
  code:string

  @Field()
  isStock:boolean

  @Field()
  minimalStock:number

  @Field()
  uom:string

  @Field()
  createdAt:Date

  @Field()
  updateddAt:Date
  
  

}
