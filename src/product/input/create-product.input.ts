import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  
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

}
