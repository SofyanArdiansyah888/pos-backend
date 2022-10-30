import { Module } from '@nestjs/common';
import { WastedStockService } from './wasted-stock.service';
import { WastedStockResolver } from './wasted-stock.resolver';

@Module({
  providers: [WastedStockResolver, WastedStockService]
})
export class WastedStockModule {}
