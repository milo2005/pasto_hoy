import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Plan } from "../schemas/plan.schema";
import { Model } from "mongoose";
import { PlanDto } from "../../dtos/plan.dto";

@Injectable()
export class PlanDao{

    constructor(@InjectModel(Plan.name) private model: Model<Plan> ){}

    async insert(plan: PlanDto) {
        const data: Plan = {...plan, createdAt: new Date() };
        const newEvent = new this.model(data);
        await newEvent.save();
    }

    async getAll(page?: number, pageSize?: number): Promise<PlanDto[]> {
        let query =  this.model.find()
        .sort({createdAt: -1});
        
        if(page != null) {
            const size = pageSize ?? 50;
            query = query
            .skip((page-1) * size)
            .limit(size)

        }
        
        const result = await query.exec();

        return result.map((doc)=> this.mapToDto(doc.id, doc));


    }

    async remove(id: string) {
        await this.model.deleteOne({_id: id});
    }

    async update(id: string, event: PlanDto) {
        await this.model.updateOne({_id: id}, {$set: event});
    }

    private mapToDto(id: string, data: Plan): PlanDto{
        return {
            id,
            name: data.name,
            createdAt: data.createdAt.toISOString(),
            description: data.description,
            image: data.image,
            shortDescription: data.shortDescription,
            url: data.url, 
            items: data.items.map((item)=> ({
                description: item.description,
                name: item.name,
                address: item.description,
                image: item.image,
                phone: item.phone
            })) 
        };
    }

    
}