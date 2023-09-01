import { IsDate, IsNotEmpty, IsPhoneNumber, IsUrl, Min } from "class-validator";
import { IsNull } from "../../utils/validation";

export class EventDto {
    
    id?: string;

    @IsNotEmpty()
    name: string;

    @IsDate()
    date: Date;

    @IsNotEmpty()
    description: string;
    
    @IsNotEmpty()
    shortDescription: string;

    @IsNotEmpty()
    owner: string;
    
    @IsUrl()
    image: string;

    @IsNotEmpty()
    address: string;

    @IsNull()
    @Min(0)
    cost?: number;
    
    @IsNull()
    @IsPhoneNumber()
    phone?: string;

    @IsNull()
    @IsUrl()
    url?: string;
}