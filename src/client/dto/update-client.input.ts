import { CreateClientInput } from './create-client.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateClientInput extends PartialType(CreateClientInput) {
  @Field(() => Int,{description:''})
  id: number;

  @Field({description:''})
  email: string

  @Field({description:''})
  name: string

  @Field({description:''})
  phone: string
}
