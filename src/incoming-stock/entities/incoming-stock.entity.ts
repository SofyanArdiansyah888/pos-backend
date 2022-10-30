import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IncomingStockMaterialEntity } from './incoming-stock-material.entity';

@ObjectType()
export class IncomingStockEntity {
  @Field(() => Int)
  id: number;
  @Field({ nullable: true })
  invoiceNumber: string;
  @Field()
  tanggalMasuk: Date;

  @Field(() => [IncomingStockMaterialEntity], { nullable: true })
  incomingStockMaterial?: IncomingStockMaterialEntity[];
}
