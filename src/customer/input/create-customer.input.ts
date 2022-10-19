import { InputType, Int, Field } from '@nestjs/graphql';
import { UserRole } from '@prisma/client';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateCustomerInput {
  @Field({ nullable: true })
  @IsEmail()
  email: string;

  @Field({ nullable: true })
  phone: string;

  @Field()
  @IsNotEmpty()
  name: string;
}
