import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ClientModule } from './client/client.module';
import { join } from 'path';

import { PrismaModule } from './prisma/prisma.module';
import { BrandModule } from './brand/brand.module';
import { CategoryModule } from './category/category.module';
import { UomModule } from './uom/uom.module';
import { TaxModule } from './tax/tax.module';
import { DiscountModule } from './discount/discount.module';
import { ProductModule } from './product/product.module';
import { VariantModule } from './variant/variant.module';
import { OrderModule } from './order/order.module';
import { OrderProductModule } from './order-product/order-product.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile:join(process.cwd(),'src/schema.gql'),
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
      debug: true,
      playground:true,
    }),
    ClientModule,
    PrismaModule,
    BrandModule,
    CategoryModule,
    UomModule,
    TaxModule,
    DiscountModule,
    ProductModule,
    VariantModule,
    OrderModule,
    OrderProductModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
