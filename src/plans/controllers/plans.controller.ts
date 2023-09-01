import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PlanDto } from '../dtos/plan.dto';

@Controller('plans')
export class PlansController {

    @Get("active")
    async getActive(@Query("page") page?: number, @Query("page_size") pageSize?: number): Promise<PlanDto[]>{
        return [];
    }

    @Get()
    async getAll(@Query("page") page?: number, @Query("page_size") pageSize?: number): Promise<PlanDto[]> {
        return [];
    }

    @Post()
    add(@Body() event: PlanDto) {

    }

    @Put(":id")
    update(@Param("id") id:string, @Body() event: PlanDto){

    }

    @Delete(":id")
    remove(@Param("id") id:string) {

    }

}
