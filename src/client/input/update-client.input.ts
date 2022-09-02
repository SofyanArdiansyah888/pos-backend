import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsNumber, MinLength } from 'class-validator';
import { CreateClientInput } from './create-client.input';

@InputType()
export class UpdateClientInput extends PartialType(CreateClientInput) {
  @Field()
  @IsNumber()
  id: number;

  @Field({description:''})
  @IsEmail()
  @IsNotEmpty()
  email: string

  
  @Field({description:''})
  @MinLength(3)
  name: string

  
  @Field({description:''})
  @MinLength(4)
  phone: string
}
