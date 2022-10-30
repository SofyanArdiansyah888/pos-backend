/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindStockMaterialInput {
@Field()
take: number;

@Field()
skip: number;

@Field()
cursor: number;

@Field()
filter: string;
}
