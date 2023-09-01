import { Injectable } from "@nestjs/common";
import { User } from "../schemas/user.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { UserInfoDto } from "src/auth/dtos/user-info.dto";

@Injectable()
export class UserDao{

    constructor(@InjectModel(User.name) private model: Model<User> ){}

    async insert(userInfo: UserInfoDto) {
        const user :User = {...userInfo, createdAt: new Date() };
        const newUser = new this.model(user);
        await newUser.save();
    }

    async getByEmailAndPassword(email: string, password: string): Promise<UserInfoDto | undefined> {
        const result = await this.model.findOne({email, password});
        if(!result) {
            return undefined;
        }

        const data = result.toJSON();
        return {
            id: result.id,
            name: data.name,
            email: data.email,
            password: data.password
        };
    }
}