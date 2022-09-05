import { InputType, Int, Field } from '@nestjs/graphql';
import { UserRole } from '@prisma/client';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserInput {

  @Field()
  @IsNotEmpty()
  @IsEmail()
  
  email: string

  @Field()
  @IsNotEmpty()
  name: string

  @Field()
  @IsNotEmpty()
  password: string

  @Field()
  @IsNotEmpty()
  role: UserRole
}
