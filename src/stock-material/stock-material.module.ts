import { Module } from '@nestjs/common';
import { StockMaterialService } from './stock-material.service';
import { StockMaterialResolver } from './stock-material.resolver';

@Module({
  providers: [StockMaterialResolver, StockMaterialService]
})
export class StockMaterialModule {}
