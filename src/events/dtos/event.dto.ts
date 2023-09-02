import { IsDate, IsDateString, IsNotEmpty, IsPhoneNumber, IsUrl, Min } from "class-validator";
import { IsNull } from "../../utils/validation";

export class EventDto {
    
    id?: string;

    @IsNull()
    @IsDate()
    createdAt?: Date;
    
    @IsNotEmpty()
    name: string;

    @IsDateString()
    date: string;

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
    @IsNotEmpty()
    phone?: string;

    @IsNull()
    @IsUrl()
    url?: string;
}