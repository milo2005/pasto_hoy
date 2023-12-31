import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Role } from "../../../utils/decorators";

@Schema()
export class Operator {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop({type: String, enum: Role})
    role: Role;

    @Prop({type: Date})
    createdAt: Date;
}

export const OperatorSchema = SchemaFactory.createForClass(Operator);