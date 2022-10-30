import { Module } from '@nestjs/common';
import { IncomingStockService } from './incoming-stock.service';
import { IncomingStockResolver } from './incoming-stock.resolver';

@Module({
  providers: [IncomingStockResolver, IncomingStockService]
})
export class IncomingStockModule {}
