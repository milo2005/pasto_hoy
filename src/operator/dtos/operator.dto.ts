import { IsDate, IsEmail, IsEnum, IsNotEmpty, MinLength } from "class-validator";
import { Role } from "../../utils/decorators";


export class OperatorInfoDto {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsEnum(Role)
    role: Role;
}


export class OperatorDto {
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(Role)
    role: Role;

    @IsDate()
    createdAt: Date;
}