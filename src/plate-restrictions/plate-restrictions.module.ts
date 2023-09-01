import { Module } from '@nestjs/common';
import { PlateRestrictionsService } from './services/plate-restrictions.service';
import { PlateRestrictionsController } from './controllers/plate-restrictions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PlateSeed, PlateSeedSchema } from './data/schemas/plate-seed.schema';
import { PlateSeedDao } from './data/daos/plate-seed.dao';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PlateSeed.name, schema: PlateSeedSchema }])
  ],
  providers: [PlateRestrictionsService, PlateSeedDao],
  controllers: [PlateRestrictionsController]
})
export class PlateRestrictionsModule {}
