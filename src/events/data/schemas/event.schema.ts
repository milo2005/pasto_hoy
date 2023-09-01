import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Event {
    @Prop()
    name: string;

    @Prop({type: Date})
    createdAt: Date;

    @Prop({type: Date})
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