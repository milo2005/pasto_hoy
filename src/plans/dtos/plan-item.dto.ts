import { IsNotEmpty, IsPhoneNumber, IsUrl } from "class-validator";
import { IsNull } from "../../utils/validation";

export class PlanItemDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;

    @IsNull()
    @IsNotEmpty()
    address?: string;

    @IsNull()
    @IsPhoneNumber()
    phone?: string;

    @IsNull()
    @IsUrl()
    image?: string;
    
}