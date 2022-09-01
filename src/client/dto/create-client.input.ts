import { InputType, Int, Field } from '@nestjs/graphql';
import {IsEmail, MinLength} from 'class-validator'
@InputType()
export class CreateClientInput {

  
  @Field({description:''})
  @IsEmail()
  email: string

  
  @Field({description:''})
  @MinLength(3)
  name: string

  
  @Field({description:''})
  @MinLength(4)
  phone: string
}
