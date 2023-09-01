import { IsEnum, IsNotEmpty } from "class-validator";
import { Role } from "src/utils/decorators";
import { IsNull } from "../../utils/validation";


export class TokenDto {
    @IsNotEmpty()
    token: string;

    @IsNull()
    @IsEnum(Role)
    role?: Role;
}