import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { ProductEntity } from './entities/product.entity';
import { CreateProductInput } from './input/create-product.input';
import { UpdateProductInput } from './input/update-product.input';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProductInput): Promise<ProductEntity> {
    const { variants, product } = this.sanitizeCreatedInput(data);
    return await this.prisma.product.create({
      data: {
        ...product,
        variants: {
          create: variants,
        },
      },
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ProductWhereUniqueInput;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput;
  }) {
    return await this.prisma.product.findMany({
      ...params,
      include: {
        variants: true,
        category: true,
      },
    });
  }

  findOne(where: Prisma.ProductWhereUniqueInput) {
    return this.prisma.product.findUnique({
      where,
      include: {
        variants: true,
        category: true,
      },
    });
  }

  update(params: {
    where: Prisma.ProductWhereUniqueInput;
    data: UpdateProductInput;
  }) {
    const { variants, product } = this.sanitizeUpdateInput(params.data);

    // return this.prisma.product.update({
    //   ...product,

    //   include: {
    //     variants: true,
    //     category: true,
    //   },
    // });
  }

  remove(where: Prisma.ProductWhereUniqueInput) {
    return this.prisma.product.delete({
      where,
    });
  }

  sanitizeCreatedInput(data: CreateProductInput) {
    const result = {
      code: `SKU/${data.name.replace(' ', '').toUpperCase()}`,
      ...data,
    };
    const product = { ...result };
    delete product.variants;

    const variants = result.variants;
    variants.map((variant) => {
      variant.variantCode = `${result.code}/${variant.name
        .replace(' ', '')
        .toUpperCase()}`;
    });
    return { variants, product };
  }

  sanitizeUpdateInput(data: UpdateProductInput) {
    const result = { ...data };
    const product = { ...result };
    delete product.variants;
    const variants = result.variants;
    variants.map((variant) => {
      delete variant.variantCode;
      return variant;
    });
    return { variants, product };
  }
}
