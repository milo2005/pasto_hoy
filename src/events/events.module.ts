import { Module } from '@nestjs/common';
import { EventsController } from './controllers/events.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {Event, EventSchema} from './data/schemas/event.schema';
import { EventDao } from './data/dao/event.dao';

@Module({
  imports: [MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }])],
  controllers: [EventsController],
  providers: [EventDao]
})
export class EventsModule {}
