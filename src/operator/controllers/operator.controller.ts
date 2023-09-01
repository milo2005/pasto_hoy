import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { OperatorDao } from '../data/daos/operator.dao';
import { OperatorInfoDto } from '../dtos/operator.dto';

@Controller('operator')
export class OperatorController {

    constructor(private readonly service: OperatorDao){}

    @Post()
    add(@Body() operator: OperatorInfoDto) {
        return this.service.insert(operator);
    }

    @Get()
    getAll(@Query("page") page?: number, @Query("page_size") pageSize?: number){
        return this.service.getAll(page, pageSize);
    }

    @Delete(":id")
    remove(@Param("id") id: string){
        return this.service.remove(id);
    }

    @Put(":id")
    update(@Param("id") id: string, @Body() operator: OperatorInfoDto){
        return this.service.update(id, operator);
    }
}
