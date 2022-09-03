import { Test, TestingModule } from '@nestjs/testing';
import { VariantResolver } from './variant.resolver';
import { VariantService } from './variant.service';

describe('VariantResolver', () => {
  let resolver: VariantResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VariantResolver, VariantService],
    }).compile();

    resolver = module.get<VariantResolver>(VariantResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
