import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber } from "class-validator";

@InputType()
export class DeleteDiscountInput{
    @Field()
    @IsNotEmpty()
    @IsNumber()
    id:number
}