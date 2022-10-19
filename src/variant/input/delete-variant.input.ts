import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber } from "class-validator";

@InputType()
export class DeleteVariantInput{
    @Field()
    @IsNotEmpty()
    @IsNumber()
    id:number
}