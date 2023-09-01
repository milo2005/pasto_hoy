import { Injectable } from '@nestjs/common';
import { TokenDto } from '../dtos/token.dto';
import { UserDao } from '../data/daos/user.dao';
import { JwtService } from '@nestjs/jwt';
import { UserInfoDto } from '../dtos/user-info.dto';
import { OperatorDao } from '../../operator/data/daos/operator.dao';

@Injectable()
export class AuthService {

    constructor(
        private readonly userDao: UserDao, 
        private readonly operatorDao: OperatorDao,
        private readonly jwt: JwtService
        ) {}

    async login(email:string, password: string): Promise<TokenDto | undefined> {
        const user = await this.userDao.getByEmailAndPassword(email, password);
        if(!user){
            return undefined;
        }
        const payload = {...user, password: undefined};
        const token = await this.jwt.signAsync(payload);
        return { token };
    }

    async registerUser(user: UserInfoDto): Promise<{token: string}>{
        await this.userDao.insert(user);
        const payload = {...user, password: undefined};
        const token = await this.jwt.signAsync(payload);
        return {token};
    }

    async loginOperator(email:string, password: string): Promise<TokenDto | undefined>  {
        const operator = await this.operatorDao.getByEmailAndPassword(email, password);
        if(!operator){
            return undefined;
        }
        const payload = {... operator, password: undefined};
        const token = await this.jwt.signAsync(payload);
        return { token, role: operator.role };
    }
}
