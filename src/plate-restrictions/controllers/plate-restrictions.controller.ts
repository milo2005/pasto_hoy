import { Body, Controller, Get, Param, Put, Query } from '@nestjs/common';
import { PlateRestrictionDto } from '../dtos/plate-restriction.dto';
import { PlateSeedDto } from '../dtos/plate-seed.dto';
import { Role, Roles } from '../../utils/decorators';

@Controller('plate-restrictions')
export class PlateRestrictionsController {

    @Get()
    getRestrictions(): PlateRestrictionDto {
        return {} as PlateRestrictionDto;
    }

    @Roles(Role.Admin, Role.Editor)
    @Put()
    updateSeed(@Body() seed: PlateSeedDto){

    }

}
