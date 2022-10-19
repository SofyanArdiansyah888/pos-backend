import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';
import { UserRole } from '@prisma/client';

@InputType()
export class UpdateCustomerInput {
  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @Field({ nullable: true })
  @IsEmail()
  email: string;

  @Field({ nullable: true })
  phone: string;

  @Field()
  @IsNotEmpty()
  name: string;
}
