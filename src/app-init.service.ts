import { Injectable } from "@nestjs/common";
import { OperatorDao } from "./operator/data/daos/operator.dao";
import { Role } from "./utils/decorators";
import { OperatorInfoDto } from "./operator/dtos/operator.dto";

@Injectable()
export class AppInit {

    private defaultAdmin: OperatorInfoDto = {
        email: "admin@email.com",
        name: "admin",
        role: Role.Admin,
        password: "admin123"
    }

    constructor(private readonly operatorDao: OperatorDao){}

    async init() {
        const operators = await this.operatorDao.getByRole(Role.Admin, 1);
        if(operators.length > 0){
            return 
        }

        await this.operatorDao.insert(this.defaultAdmin);
    }
}