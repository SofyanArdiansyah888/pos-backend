import { Field, InputType } from "@nestjs/graphql";
import { IsNumber } from "class-validator";

@InputType()
export class DeleteClientInput{
    @Field()
    @IsNumber()
    id:number
}