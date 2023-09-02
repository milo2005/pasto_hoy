import { Injectable } from '@nestjs/common';
import { PlateSeedDao } from '../data/daos/plate-seed.dao';
import { PlateRestrictionDto } from '../dtos/plate-restriction.dto';
import { Days } from '../dtos/plate-seed.dto';

@Injectable()
export class PlateRestrictionsService {

    constructor(private readonly dao: PlateSeedDao){}


    async calculateRestrictions(): Promise<PlateRestrictionDto> {
        const seed = await this.dao.get();
        if(seed == undefined) {
            return {
                monday: [],
                tuesday: [],
                wednesday: [],
                thursday: [],
                friday: [],
                saturday:[],
                sunday: []
            }
        }

        const seedCount = seed.seed.length;
        //const diffMillis = new Date().getMilliseconds() - seed.seedDate.getMilliseconds();
        //const diffDays = Math.ceil(diffMillis / 86400000 );

        

        const today = this.getToday();


    }

    private getToday(): Days {
        const currentDate = new Date();
        const today = currentDate.getDay() - 1;
        return today < 0 ? Days.Sunday : today;
    }

}
