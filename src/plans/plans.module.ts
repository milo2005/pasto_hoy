import { Module } from '@nestjs/common';
import { PlansController } from './controllers/plans.controller';
import { PlanDao } from './data/daos/plan.dao';
import { MongooseModule } from '@nestjs/mongoose';
import { Plan, PlanSchema } from './data/schemas/plan.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Plan.name, schema: PlanSchema }])
  ],
  providers: [PlanDao],
  controllers: [PlansController]
})
export class PlansModule {}
