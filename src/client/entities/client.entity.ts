import { ObjectType, Field, Int,DateScalarMode } from '@nestjs/graphql';

@ObjectType()
export class ClientEntity {
  @Field(() => Int, { description: 'Id Client' })
  id: number;

  @Field({description:''})
  email: string

  @Field({description:''})
  name: string

  @Field({description:''})
  phone: string

  // @Field({description:''})
  // orders: Order[]
  
  // orders Order[]
}
