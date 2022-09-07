import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber } from "class-validator";

@InputType()
export class DeleteOrderInput{
    @Field()
    @IsNotEmpty()
    @IsNumber()
    id:number
}