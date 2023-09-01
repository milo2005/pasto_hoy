import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PlanDto } from '../dtos/plan.dto';
import { PlanDao } from '../data/daos/plan.dao';
import { Role, Roles } from '../../utils/decorators';

@Controller('plans')
export class PlansController {

    constructor(private readonly service: PlanDao){}

    @Get()
    async getAll(@Query("page") page?: number, @Query("page_size") pageSize?: number): Promise<PlanDto[]> {
        return this.service.getAll(page, pageSize);
    }

    @Roles(Role.Admin, Role.Editor)
    @Post()
    async add(@Body() plan: PlanDto) {
        await this.service.insert(plan);
    }

    @Roles(Role.Admin, Role.Editor)
    @Put(":id")
    async update(@Param("id") id:string, @Body() plan: PlanDto){
        await this.service.update(id, plan);
    }

    @Roles(Role.Admin, Role.Editor)
    @Delete(":id")
    async remove(@Param("id") id:string) {
        await this.service.remove(id);
    }

}
