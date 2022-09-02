import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ClientService } from './client.service';
import { ClientEntity } from './entities/client.entity';
import { CreateClientInput } from './input/create-client.input';
import { UpdateClientInput } from './input/update-client.input';
import { Prisma } from '@prisma/client';
import { DeleteClientInput } from './input/delete-client.input';

@Resolver(() => ClientEntity)
export class ClientResolver {
  constructor(private readonly clientService: ClientService) {}

  @Mutation(() => ClientEntity)
  createClient(@Args('createClientInput') data: CreateClientInput) {
    return this.clientService.create(data);
  }

  @Query(() => [ClientEntity])
  clients() {
    return this.clientService.findAll({
      take: 10,
      orderBy: {
        id: Prisma.SortOrder.desc,
      },
    });
  }

  @Query(() => ClientEntity)
  client(@Args('id', { type: () => Int }) id: number) {
    return this.clientService.findOne({ id });
  }

  @Mutation(() => ClientEntity)
  updateClient(@Args('updateClientInput') data: UpdateClientInput) {
    return this.clientService.update({
      where: {
        id: data.id,
      },
      data,
    });
  }

  @Mutation(() => ClientEntity)
  deleteClient(@Args('id') deleteInput: DeleteClientInput) {
    return this.clientService.delete({ id: deleteInput.id });
  }
}
