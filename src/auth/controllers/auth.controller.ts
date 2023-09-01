import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { TokenDto } from '../dtos/token.dto';
import { CredentialsDto } from '../dtos/credentials.dto';
import { UserInfoDto } from '../dtos/user-info.dto';
import { AuthService } from '../services/auth.service';
import { ApiPublic } from 'src/utils/decorators';


@Controller('auth')
export class AuthController {

    constructor(private readonly service: AuthService){}

    @ApiPublic()
    @Post("login")
    async login(@Body() credentials: CredentialsDto): Promise<TokenDto>{
        const result = this.service.login(credentials.email, credentials.password);
        if(!result){
            throw new UnauthorizedException();
        }

        return result;
    }

    @ApiPublic()
    @Post("signin")
    signinConsumer(@Body() user: UserInfoDto): Promise<TokenDto>{
        return this.service.registerUser(user);
    }

    @ApiPublic()
    @Post("opertator/login")
    async loginOperator(@Body() credentials: CredentialsDto): Promise<TokenDto>{
        const result = this.service.loginOperator(credentials.email, credentials.password);
        if(!result){
            throw new UnauthorizedException();
        }

        return result;
    }
}
