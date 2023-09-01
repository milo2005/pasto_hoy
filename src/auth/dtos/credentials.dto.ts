import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CredentialsDto {
    @IsEmail()
    email:string;
    
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}