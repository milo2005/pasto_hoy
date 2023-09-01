import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { EventDto } from '../dtos/event.dto';

@Controller('events')
export class EventsController {


    @Get("active")
    async getActive(@Query("page") page?: number, @Query("page_size") pageSize?: number): Promise<EventDto[]>{
        return [];
    }

    @Get()
    async getAll(@Query("page") page?: number, @Query("page_size") pageSize?: number): Promise<EventDto[]> {
        return [];
    }

    @Post()
    add(@Body() event: EventDto) {

    }

    @Put(":id")
    update(@Param("id") id:string, @Body() event: EventDto){

    }

    @Delete(":id")
    remove(@Param("id") id:string) {

    }
}
