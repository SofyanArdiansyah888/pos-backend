import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { CreateAuthInput } from './input/create-auth.input';
import { UpdateAuthInput } from './input/update-auth.input';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Auth)
  signin(@Args('createAuthInput') createAuthInput: CreateAuthInput) {
    // return this.authService.create(createAuthInput);
  }


  @Mutation(() => Auth)
  signup(@Args('updateAuthInput') updateAuthInput: UpdateAuthInput) {
    // return this.authService.update(updateAuthInput.id, updateAuthInput);
  }

  @Mutation(() => Auth)
  forgetPassword(@Args('id', { type: () => Int }) id: number) {
    // return this.authService.remove(id);
  }

  @Mutation(() => Auth)
  changePassword(@Args('id', { type: () => Int }) id: number) {
    // return this.authService.remove(id);
  }
}
