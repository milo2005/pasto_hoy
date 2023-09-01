import { Module } from '@nestjs/common';
import { PlateRestrictionsService } from './plate-restrictions.service';
import { PlateRestrictionsController } from './controllers/plate-restrictions.controller';

@Module({
  providers: [PlateRestrictionsService],
  controllers: [PlateRestrictionsController]
})
export class PlateRestrictionsModule {}
