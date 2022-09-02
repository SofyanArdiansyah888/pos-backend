import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber } from "class-validator";

@InputType()
export class DeleteBrandInput{
    @Field()
    @IsNumber()
    @IsNotEmpty()
    id:number
}