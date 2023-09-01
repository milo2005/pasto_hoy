import { IsEmail, IsNotEmpty, MinLength } from "class-validator";


export class UserInfoDto {
    id?: string;
    
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;
}