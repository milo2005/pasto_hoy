import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Event {
    @Prop()
    name: string;

    @Prop()
    createdAt: Date;

    @Prop()
    date: Date;

    @Prop()
    description: string;

    @Prop()
    shortDescription: string;

    @Prop()
    owner: string;

    @Prop()
    image: string;
    
    @Prop()
    address: string;

    @Prop()
    cost?: number;

    @Prop()
    phone?: string;
    
    @Prop()
    url?: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);