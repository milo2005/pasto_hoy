import { IsArray, IsDateString } from "class-validator";

export enum Days{
    Monday = 0, 
    Tuesday = 1, 
    Wednesday = 2, 
    Thursday = 3, 
    Friday = 4, 
    Saturday = 5,
    Sunday = 6
}

export class PlateSeedDto {
    @IsArray()
    seed: number[];

    @IsDateString()
    seedDate: string;

    @IsArray()
    exceptions: Days[];
}