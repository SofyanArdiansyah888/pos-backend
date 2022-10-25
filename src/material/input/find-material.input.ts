/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';
import { IsEmpty } from 'class-validator';

@InputType()
export class FindMaterialInput {
@Field()
take: number;

@Field()
skip: number;

@Field()
cursor: number;

@Field()
filter: string;



}
