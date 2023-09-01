import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export class PlanItem{
    @Prop() 
    name: string;

    @Prop()
    description: string;

    @Prop()
    address?: string;

    @Prop()
    phone?: string;

    @Prop()
    image?: string;
}

@Schema()
export class Plan {
    @Prop()
    name: string;

    @Prop({type: Date})
    createdAt: Date;

    @Prop()
    description: string;

    @Prop()
    shortDescription: string;
    
    @Prop()
    image: string;
    
    @Prop()
    url?: string;

    @Prop([PlanItem])
    items: PlanItem[];
}

export const PlanSchema = SchemaFactory.createForClass(Plan);