import { CreateIncomingStockInput } from './create-incoming-stock.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';
import { IncomingStockMaterialEntity } from '../entities/incoming-stock-material.entity';

@InputType()
export class UpdateIncomingStockInput extends PartialType(
  CreateIncomingStockInput,
) {
  @Field(() => Int)
  id: number;

  @Field()
  @IsNotEmpty()
  @MinLength(3)
  invoiceNumber: string;

  @Field(() => IncomingStockMaterialEntity)
  incomingStockMaterialEntity: IncomingStockMaterialEntity;

  @Field()
  @IsNumber()
  categoryId: number;

  @Field()
  @IsNotEmpty()
  tanggalMasuk: Date;
}
