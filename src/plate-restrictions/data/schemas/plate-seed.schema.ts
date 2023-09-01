import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class PlateSeed {
    
    @Prop()
    seed: number[];

    @Prop()
    seedDate: Date;

    @Prop([Number])
    exceptions: number[];
}

export const PlateSeedSchema = SchemaFactory.createForClass(PlateSeed);