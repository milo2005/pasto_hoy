import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PlateSeed } from "../schemas/plate-seed.schema";
import { Model } from "mongoose";
import { PlateSeedDto } from "src/plate-restrictions/dtos/plate-seed.dto";

@Injectable()
export class PlateSeedDao{

    constructor(@InjectModel(PlateSeed.name) private model: Model<PlateSeed> ){} 

    async insertOrReplace(seed: PlateSeed){
        await this.model.deleteMany();
        const newSeed = new this.model(seed);
        await newSeed.save();
    }

    async get(): Promise<PlateSeedDto | undefined> {
        const result = await this.model.find().exec();
        if(result.length == 0) {
            return undefined;
        }
        return this.mapToDto(result[0]);
    }

    private mapToDto(seed:PlateSeed): PlateSeedDto{
        return {
            exceptions: seed.exceptions,
            seed: seed.seed,
            seedDate: seed.seedDate
        }
    }


}