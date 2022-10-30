import { Module } from '@nestjs/common';
import { OpnameStockService } from './opname-stock.service';
import { OpnameStockResolver } from './opname-stock.resolver';

@Module({
  providers: [OpnameStockResolver, OpnameStockService]
})
export class OpnameStockModule {}
