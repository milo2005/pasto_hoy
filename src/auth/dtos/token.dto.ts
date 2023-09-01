import { IsEnum, IsNotEmpty } from "class-validator";
import { Role } from "../../operator/dtos/operator.dto";
import { IsNull } from "src/utils/validation";


export class TokenDto {
    @IsNotEmpty()
    token: string;

    @IsNull()
    @IsEnum(Role)
    role?: Role;
}