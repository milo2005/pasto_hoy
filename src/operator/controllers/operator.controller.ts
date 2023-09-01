import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { OperatorDao } from '../data/daos/operator.dao';
import { OperatorInfoDto } from '../dtos/operator.dto';
import { Role, Roles } from '../../utils/decorators';

@Controller('operator')
export class OperatorController {

    constructor(private readonly service: OperatorDao){}

    @Roles(Role.Admin)
    @Post()
    add(@Body() operator: OperatorInfoDto) {
        return this.service.insert(operator);
    }

    @Roles(Role.Admin)
    @Get()
    getAll(@Query("page") page?: number, @Query("page_size") pageSize?: number){
        return this.service.getAll(page, pageSize);
    }

    @Roles(Role.Admin)
    @Delete(":id")
    remove(@Param("id") id: string){
        return this.service.remove(id);
    }

    @Roles(Role.Admin)
    @Put(":id")
    update(@Param("id") id: string, @Body() operator: OperatorInfoDto){
        return this.service.update(id, operator);
    }
}
