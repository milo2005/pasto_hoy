import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Event } from "../schemas/event.schema";
import { Model } from "mongoose";
import { EventDto } from "../../dtos/event.dto";

@Injectable()
export class EventDao {
    constructor(@InjectModel(Event.name) private model: Model<Event>){}

    async insert(event: EventDto) {
        const data: Event = {...event, date: new Date(event.date), createdAt: new Date() };
        const newEvent = new this.model(data);
        await newEvent.save();
    }

    async getOnlyActive(page?: number, pageSize?: number): Promise<EventDto[]> {
        let query =  this.model.find({
            date: { $gte: new Date() }
        })
        .sort({date: -1});
        
        if(page != null) {
            const size = pageSize ?? 50;
            query = query
            .skip((page-1) * size)
            .limit(size)

        }
        
        const result = await query.exec();

        return result.map((doc)=> this.mapToDto(doc.id, doc));
    }
    
    async getAll(page?: number, pageSize?: number): Promise<EventDto[]> {
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

    async update(id: string, event: EventDto) {
        await this.model.updateOne({_id: id}, {$set: event});
    }

    private mapToDto(id: string, data: Event): EventDto{
        return {
            id,
            name: data.name,
            createdAt: data.createdAt,
            address: data.address,
            date: data.date.toISOString(),
            description: data.description,
            image: data.image,
            owner: data.owner,
            shortDescription: data.shortDescription,
            cost: data.cost,
            phone: data.phone,
            url: data.url
        };
    }

}