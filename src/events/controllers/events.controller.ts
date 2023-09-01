import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { EventDto } from '../dtos/event.dto';
import { EventDao } from '../data/dao/event.dao';
import { Role, Roles } from '../../utils/decorators';

@Controller('events')
export class EventsController {

    constructor(private readonly service: EventDao){}

    @Get("active")
    async getActive(@Query("page") page?: number, @Query("page_size") pageSize?: number): Promise<EventDto[]>{
        return this.service.getOnlyActive(page, pageSize);
    }

    @Roles(Role.Admin, Role.Editor)
    @Get()
    async getAll(@Query("page") page?: number, @Query("page_size") pageSize?: number): Promise<EventDto[]> {
        return this.service.getAll(page, pageSize);
    }

    @Roles(Role.Admin, Role.Editor)
    @Post()
    async add(@Body() event: EventDto) {
        await this.service.insert(event);
    }

    @Roles(Role.Admin, Role.Editor)
    @Put(":id")
    async update(@Param("id") id:string, @Body() event: EventDto){
        await this.service.update(id, event);
    }

    @Roles(Role.Admin, Role.Editor)
    @Delete(":id")
    async remove(@Param("id") id:string) {
        await this.service.remove(id);
    }
}
