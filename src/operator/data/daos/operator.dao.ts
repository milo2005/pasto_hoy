import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Operator } from "../schemas/operator.schema";
import { Model } from "mongoose";
import { OperatorInfoDto, OperatorDto } from "src/operator/dtos/operator.dto";
import { Role } from "../../../utils/decorators";

@Injectable()
export class OperatorDao{

    constructor(@InjectModel(Operator.name) private model: Model<Operator> ){}

    async insert(operator: OperatorInfoDto) {
        const data :Operator = {...operator, createdAt: new Date() };
        const newOperator = new this.model(data);
        await newOperator.save();
    }

    async getByEmailAndPassword(email: string, password: string): Promise<OperatorDto | undefined> {
        const result = await this.model.findOne({email, password});
        if(!result) {
            return undefined;
        }

        return this.mapToDto(result.id, result);
    }

    async getAll(page?: number, pageSize?: number): Promise<OperatorDto[]> {
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

    async getByRole(role: Role, page?: number, pageSize?: number): Promise<OperatorDto[]> {
        let query =  this.model.find({ role  })
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

    async update(id: string, operator: OperatorInfoDto) {
        await this.model.updateOne({_id: id}, {$set: operator});
    }

    private mapToDto(id: string, data: Operator): OperatorDto{
        return {
            id,
            name: data.name,
            createdAt: data.createdAt,
            email: data.email,
            role: data.role
        };
    }
}