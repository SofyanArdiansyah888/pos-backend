import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { OrderProductModule } from './order-product/order-product.module';
import { OrderModule } from './order/order.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { TaxModule } from './tax/tax.module';
import { UserModule } from './user/user.module';
import { VariantModule } from './variant/variant.module';
import { CustomerModule } from './customer/customer.module';
import { MaterialModule } from './material/material.module';
import { PrinterModule } from './printer/printer.module';
import { TableModule } from './table/table.module';
import { StockMaterialModule } from './stock-material/stock-material.module';
import { IncomingStockModule } from './incoming-stock/incoming-stock.module';
import { WastedStockModule } from './wasted-stock/wasted-stock.module';
import { OpnameStockModule } from './opname-stock/opname-stock.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
      debug: true,
      playground: true,
    }),
    PrismaModule,
    CategoryModule,
    TaxModule,
    ProductModule,
    VariantModule,
    OrderModule,
    OrderProductModule,
    UserModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CustomerModule,
    MaterialModule,
    PrinterModule,
    TableModule,
    StockMaterialModule,
    IncomingStockModule,
    WastedStockModule,
    OpnameStockModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
