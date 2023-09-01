import { IsArray } from "class-validator";

export class PlateSeedDto {
    @IsArray()
    seed: number[];
}