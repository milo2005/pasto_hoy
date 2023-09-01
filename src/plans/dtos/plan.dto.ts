import { IsNotEmpty, IsUrl, IsArray, ValidateNested, IsDate } from "class-validator";
import { PlanItemDto } from "./plan-item.dto";
import { IsNull } from "../../utils/validation";
import { Type } from "class-transformer";

export class PlanDto {

    id?: string;

    @IsNotEmpty()
    name: string;

    @IsNull()
    @IsDate()
    createdAt?: Date;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    shortDescription: string;

    @IsUrl()
    image: string;

    @IsNull()
    @IsUrl()
    url?: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PlanItemDto)
    items: PlanItemDto[];
}