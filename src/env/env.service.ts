import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvService {

    constructor(private readonly config: ConfigService){}

    get secret(): string {
        return this.config.get("SECRET");
    }

    get mongodb(): string {
        return this.config.get("MONGODB");
    }

}
