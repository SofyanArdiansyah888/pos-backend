import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateClientInput {
  @Field({description:''})
  email: string

  @Field({description:''})
  name: string

  @Field({description:''})
  phone: string
}
