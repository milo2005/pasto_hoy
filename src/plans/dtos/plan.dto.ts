import { IsNotEmpty, IsUrl, IsArray, ValidateNested } from "class-validator";
import { PlanItemDto } from "./plan-item.dto";
import { IsNull } from "../../utils/validation";
import { Type } from "class-transformer";

export class PlanDto {
    @IsNotEmpty()
    name: string;

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