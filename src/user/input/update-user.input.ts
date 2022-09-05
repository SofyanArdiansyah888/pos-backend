import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';
import { UserRole } from '@prisma/client';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @Field()
  @IsNotEmpty()
  name: string

  @Field()
  @IsNotEmpty()
  role: UserRole
}
