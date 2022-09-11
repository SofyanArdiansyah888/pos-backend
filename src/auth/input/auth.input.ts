import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class AuthInput {
  @Field()
  @IsNotEmpty()
  password:string

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email:string
}
