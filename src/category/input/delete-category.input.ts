import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber } from "class-validator";

@InputType()
export class DeleteCategoryInput{
    @Field()
    @IsNumber()
    @IsNotEmpty()
    id:number
}