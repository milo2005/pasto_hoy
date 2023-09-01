import { IsArray } from "class-validator";

export class PlateRestrictionDto {
    @IsArray()
    monday: number[];

    @IsArray()
    tuesday: number[];

    @IsArray()
    wednesday: number[];

    @IsArray()
    thursday: number[];

    @IsArray()
    friday: number [];

    @IsArray()
    saturday: number[];

    @IsArray()
    sunday: number[];
}