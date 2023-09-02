import { Body, Controller, Get, Param, Put, Query } from '@nestjs/common';
import { PlateRestrictionDto } from '../dtos/plate-restriction.dto';
import { PlateSeedDto } from '../dtos/plate-seed.dto';
import { Role, Roles } from '../../utils/decorators';

@Controller('plate-restrictions')
export class PlateRestrictionsController {

    @Get()
    getRestrictions(): PlateRestrictionDto {
        return {
            monday: [0,1],
            tuesday: [2, 3],
            wednesday: [4, 5],
            thursday: [6, 7],
            friday: [8, 9],
            saturday: [],
            sunday: []
        };
    }

    @Roles(Role.Admin, Role.Editor)
    @Put()
    updateSeed(@Body() seed: PlateSeedDto){
        
    }

}
