import { InputType } from "@nestjs/graphql";
import { isString, isNotEmpty, IsEmail} from "class-validator";

!InputType
export class CreatorUserInput {
    @isString()
    @isNotEmpty({message: 'Este campo não pode estar vazio'})   
    name: string;

    @IsEmail
    @isNotEmpty({message: 'Este campo não pode estar vazio'})       
    email: string;

}