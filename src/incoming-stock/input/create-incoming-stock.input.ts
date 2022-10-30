import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';
import { IncomingStockMaterialEntity } from '../entities/incoming-stock-material.entity';
import { CreateIncomingStockMaterialInput } from './create-incoming-stock-material.input';

@InputType()
export class CreateIncomingStockInput {
  @Field()
  @IsNotEmpty()
  @MinLength(3)
  invoiceNumber: string;

  @Field(() => [CreateIncomingStockMaterialInput])
  createIncomingStockMaterialInput: CreateIncomingStockMaterialInput[];

  @Field()
  @IsNotEmpty()
  tanggalMasuk: Date;
}
